import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {
    
  }

	loginForm = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required])
	});

  onSubmit() {
    this.auth.login(this.loginForm.value.username!, this.loginForm.value.password!).subscribe(
      (auth: Login) => {
        console.log("logged in")

        this.router.navigate(["/home"])
        alert("hello")
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
