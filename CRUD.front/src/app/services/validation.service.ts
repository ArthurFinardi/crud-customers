import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ClientService } from './client.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor(private clientService: ClientService) {}

  minimumAge(age: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const birthDate = new Date(control.value);
      const today = new Date();
      const ageDiff = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return { minimumAge: true };
      }

      return ageDiff >= age ? null : { minimumAge: true };
    };
  }

  uniqueDocument(): ValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return new Observable(subscriber => subscriber.next(null));
      }

      return this.clientService.checkDocumentExists(control.value).pipe(
        map(exists => exists ? { documentExists: true } : null)
      );
    };
  }

  uniqueEmail(): ValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return new Observable(subscriber => subscriber.next(null));
      }

      return this.clientService.checkEmailExists(control.value).pipe(
        map(exists => exists ? { emailExists: true } : null)
      );
    };
  }

  validateIE(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const isExempt = control.value.toLowerCase() === 'isento';
      if (isExempt) {
        return null;
      }

      // Adicione aqui a validação específica do IE se necessário
      return null;
    };
  }
} 