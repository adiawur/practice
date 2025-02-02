import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlogin!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userlogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(8)]]
    });
  }

  onsave() {
    const email = this.userlogin.get('email')?.value;
    const password = this.userlogin.get('password')?.value;

    this.userService.getUsers().subscribe(users => {
      const user = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

      if (user) {
        this.router.navigate(['/add-product']);
      } else {
        alert('Invalid email or password');
      }
    });
  }
}
