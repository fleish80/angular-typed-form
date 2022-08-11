import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'angular-typed-form-form-control',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" class="form">
      <label for="form-control-nullable">Form Control Nullable</label>
      <input class="input" id="form-control-nullable" formControlName="formControlNullable">
      <ng-container *ngIf="form.controls['formControlNullable'] as formControlNullable">
        <button class="button" (click)="resetFormControlNullable()">Reset Form Control Nullable</button>
        <span>formControlNullable value=> {{formControlNullable.value}}</span>
        <span>formControlNullable value is null => {{formControlNullable.value === null}}</span>
        <span>formControlNullable value is '' => {{formControlNullable.value === ''}}</span>
      </ng-container>

      <label for="form-control-not-nullable">Form Control Not Nullable</label>
      <input class="input" id="form-control-not-nullable" formControlName="formControlNotNullable">

      <ng-container *ngIf="form.controls['formControlNotNullable'] as formControlNotNullable">
        <button class="button" (click)="resetFormControlNotNullable()">Reset Form Control Nullable</button>
        <span>formControlNotNullable value => {{formControlNotNullable.value}}</span>
        <span>formControlNotNullable value is null => {{formControlNotNullable.value === null}}</span>
      </ng-container>

      <label for="form-control-number">Form Control Number</label>
      <input class="input" id="form-control-number" formControlName="formControlNumber">

      <ng-container *ngIf="form.controls['formControlNumber'] as formControlNumber">
        <button class="button" (click)="resetFormControlNumber()">Reset Form Control Nullable</button>
        <span>formControlNumber value => {{formControlNumber.value}}</span>
        <span>formControlNumber value is null => {{formControlNumber.value === null}}</span>
      </ng-container>
    </form>
  `,
  styles: [
    `.form {
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {
    const formControlNullable = new FormControl('some value');

    // value is <string | null>
    const valueNullable = formControlNullable.value

    // Type error
    // formControlNullable.setValue(1)
    formControlNullable.valueChanges.subscribe(value => {
      console.log('value', value);
    });

    const formControlNotNullable = new FormControl('some value', {nonNullable: true});

    // value is <string>
    const valueNotNullable = formControlNotNullable.value

    // Type error
    // formControlNotNullable.setValue(1)

    formControlNotNullable.valueChanges.subscribe(value => {
      console.log('value', value);
    })

    const formControlNumber = new FormControl<number>(10, {nonNullable: true})

    // value is <number>
    const valueNumber = formControlNumber.value

    // Type error
    // formControlNumber.setValue('1')

    formControlNumber.valueChanges.subscribe(value => {
      console.log('value', value);
    })

    this.form = new FormGroup({
      formControlNullable,
      formControlNotNullable,
      formControlNumber
    })
  }

  resetFormControlNullable() {
    this.form.controls['formControlNullable'].reset();
  }

  resetFormControlNotNullable() {
    this.form.controls['formControlNotNullable'].reset();
  }

  resetFormControlNumber() {
    this.form.controls['formControlNumber'].reset();
  }
}
