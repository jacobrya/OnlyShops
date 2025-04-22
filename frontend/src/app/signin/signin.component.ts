import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login, Register } from '../auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {
    
  }

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
    this.auth.register(this.registerForm.value.username!, this.registerForm.value.email!, this.registerForm.value.password!).subscribe(
      (auth: Register) => {
        console.log("logged in")

        this.router.navigate(["/log-in"])
        alert("registered successfully")
      },

      (error) => {
        console.error(`error`, error)
      }
    )
  }
  
  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(["/home"])
    }
  }
}
