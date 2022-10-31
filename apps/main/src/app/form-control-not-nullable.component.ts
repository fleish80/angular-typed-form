import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'angular-form-control-not-nullable',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  template: `
    <form [formGroup]="form" class="form">
      <label for="form-control-nullable">Form Control Not Nullable</label>
      <input class="input" id="form-control-nullable" formControlName="formControl">
      <ng-container *ngIf="form.controls['formControl'] as formControlNullable">
        <button class="button" (click)="resetFormControl()">Reset Form Control Nullable</button>
        <span>formControlNullable value=> {{formControlNullable.value}}</span>
        <span>formControlNullable value is null => {{formControlNullable.value === null}}</span>
        <span>formControlNullable value is '' => {{formControlNullable.value === ''}}</span>
      </ng-container>
    </form>
  `,
  styles: [`
    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .input {
      width: 150px;
    }

    .button {
      width: 300px;
    }
  `
  ]
})
export class FormControlNotNullableComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {
    const formControl = new FormControl('some value', {nonNullable: true});
    formControl.valueChanges.subscribe(value => {
      console.log('value', value);
    });
    this.form = new FormGroup({
      formControl
    });
  }

  resetFormControl() {
    this.form.controls['formControl'].reset();
  }
}
