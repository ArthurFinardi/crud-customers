import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ClientService, Client } from '../../services/client.service';
import { ValidationService } from '../../services/validation.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  ]
})
export class ClientFormComponent implements OnInit {
  clientForm: FormGroup;
  isPersonType: boolean = true;
  isEditMode: boolean = false;
  clientId?: number;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private validationService: ValidationService
  ) {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required]],
      document: ['', [Validators.required], [this.validationService.uniqueDocument()]],
      birthDate: ['', [Validators.required, this.validationService.minimumAge(18)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email], [this.validationService.uniqueEmail()]],
      address: this.fb.group({
        zipCode: ['', [Validators.required]],
        street: ['', [Validators.required]],
        number: ['', [Validators.required]],
        neighborhood: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]]
      }),
      ie: ['']
    });
  }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['id'];
    if (this.clientId) {
      this.isEditMode = true;
      this.loadClient(this.clientId);
    }

    this.clientForm.get('document')?.valueChanges.subscribe(value => {
      if (value) {
        this.isPersonType = value.length <= 11;
        if (!this.isPersonType) {
          this.clientForm.get('ie')?.setValidators([Validators.required, this.validationService.validateIE()]);
          this.clientForm.get('birthDate')?.clearValidators();
        } else {
          this.clientForm.get('ie')?.clearValidators();
          this.clientForm.get('birthDate')?.setValidators([Validators.required, this.validationService.minimumAge(18)]);
        }
        this.clientForm.get('ie')?.updateValueAndValidity();
        this.clientForm.get('birthDate')?.updateValueAndValidity();
      }
    });
  }

  loadClient(id: number): void {
    this.isLoading = true;
    this.clientService.getClient(id).subscribe({
      next: (client) => {
        this.clientForm.patchValue(client);
        this.isPersonType = client.type === 'PF';
        this.isLoading = false;
      },
      error: (error) => {
        this.snackBar.open('Erro ao carregar cliente', 'Fechar', {
          duration: 3000
        });
        console.error('Error loading client:', error);
        this.router.navigate(['/clients']);
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      this.isLoading = true;
      const client: Client = {
        ...this.clientForm.value,
        type: this.isPersonType ? 'PF' : 'PJ'
      };

      const request = this.isEditMode
        ? this.clientService.updateClient(this.clientId!, client)
        : this.clientService.createClient(client);

      request.subscribe({
        next: () => {
          this.snackBar.open(
            `Cliente ${this.isEditMode ? 'atualizado' : 'cadastrado'} com sucesso!`,
            'Fechar',
            { duration: 3000 }
          );
          this.router.navigate(['/clients']);
          this.isLoading = false;
        },
        error: (error) => {
          this.snackBar.open(
            `Erro ao ${this.isEditMode ? 'atualizar' : 'cadastrar'} cliente`,
            'Fechar',
            { duration: 3000 }
          );
          console.error('Error saving client:', error);
          this.isLoading = false;
        }
      });
    } else {
      this.snackBar.open('Por favor, preencha todos os campos obrigatórios.', 'Fechar', {
        duration: 3000
      });
    }
  }
} 