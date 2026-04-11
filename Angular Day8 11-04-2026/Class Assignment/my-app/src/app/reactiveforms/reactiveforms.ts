import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveforms.html',
  styleUrl: './reactiveforms.css',
})
export class Reactiveforms {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    currency: new FormControl(),
    gender: new FormControl(),
    tandc: new FormControl(),
    skills: new FormArray([])
  })

  handleSubmit() {
    console.log(this.loginForm.value);
    console.log(this.loginForm);
  }

  public get skills() {
    return this.loginForm.get('skills') as FormArray;
  }

  handleCheckboxes(event: Event) {
    let html = event.target as HTMLInputElement;
    if (html.checked) {
      this.skills.push(new FormControl(html.value))
    }
    else {
      let index = this.skills?.controls.findIndex((ele) => ele.value == html.value);
      this.skills.removeAt(index);
    }
  }
}

export function checkPass(control: AbstractControl): ValidationErrors {
  let a = false;
  let alphaNumeric = control.value.split('').forEach((ele:string) => {
    if ((ele >= 'A' && ele <= 'Z' || ele >= 'a' && ele <= 'z') && ele >= '0' && ele <= '9') {
      a = true;
    }
  });
  if (!(a)) {
    return {
      message:"Enter an alpha numeric password"
    }
  }
  return{}
}
