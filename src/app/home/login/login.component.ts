import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from 'src/app/_core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private userService: UsersService, private route: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  login(): void {
    this.userService.login(this.form.value).subscribe(
      (result) => {
        if (result.status === 'Error') {
          Swal.fire({
            icon: 'error',
            title: result.msg,
          });
        } else {
          console.log(result);

          let { username } = this.form.value;

          localStorage.setItem('userLogin', JSON.stringify(username));
          localStorage.setItem('token', result.token);

          Swal.fire('Logged successfully', '', 'success');

          this.route.navigate(['/']);
        }
      },
      (errors) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        console.log('errors', errors.error);
      }
    );
  }
}
