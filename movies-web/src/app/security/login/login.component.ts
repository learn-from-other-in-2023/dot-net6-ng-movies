import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from '~/app/common/utilities/parseWebAPIErrors';
import { IUserCredentials } from '../security.models';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errors: string[] = [];

  constructor(private securityService: SecurityService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(userCredentials: IUserCredentials) {
    this.securityService
      .login(userCredentials)
      .subscribe((authenticationResponse) => {
        this.securityService.saveToken(authenticationResponse);
        this.router.navigate(['/']);
      }, error => this.errors = parseWebAPIErrors(error));
  }

}
