import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from '~/app/common/utilities/parseWebAPIErrors';
import { IUserCredentials } from '../security.models';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errors: string[] = [];

  constructor(private securityService: SecurityService, private router: Router) {
  }

  ngOnInit(): void {
  }

  register(userCredentials: IUserCredentials) {
    this.errors = [];
    this.securityService.register(userCredentials)
      .subscribe(authenticationResponse => {
        this.securityService.saveToken(authenticationResponse);
        this.router.navigate(['/']);
      }, error => this.errors = parseWebAPIErrors(error));
  }

}
