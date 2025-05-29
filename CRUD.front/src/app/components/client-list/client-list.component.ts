import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientService, Client } from '../../services/client.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ]
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'document', 'email', 'phone', 'actions'];
  dataSource: MatTableDataSource<Client>;
  isLoading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private clientService: ClientService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource<Client>();
  }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.isLoading = true;
    this.clientService.getClients().subscribe({
      next: (clients) => {
        this.dataSource.data = clients;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: (error) => {
        this.snackBar.open('Erro ao carregar clientes', 'Fechar', {
          duration: 3000
        });
        console.error('Error loading clients:', error);
        this.isLoading = false;
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editClient(id: number): void {
    this.router.navigate(['/clients', id]);
  }

  deleteClient(id: number): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.isLoading = true;
      this.clientService.deleteClient(id).subscribe({
        next: () => {
          this.snackBar.open('Cliente excluído com sucesso!', 'Fechar', {
            duration: 3000
          });
          this.loadClients();
        },
        error: (error) => {
          this.snackBar.open('Erro ao excluir cliente', 'Fechar', {
            duration: 3000
          });
          console.error('Error deleting client:', error);
          this.isLoading = false;
        }
      });
    }
  }
} 