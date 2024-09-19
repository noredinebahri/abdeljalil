import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  onSubmit() {
    // Implement your login logic here
    // Add authentication logic and navigate to the next page upon successful login
  }
}
