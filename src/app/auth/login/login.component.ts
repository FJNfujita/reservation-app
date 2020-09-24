import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    errors: any = [];
    focus;
    focus1;
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {}

    login(loginForm) {
        this.errors = [];
        this.authService.login(loginForm.value).subscribe(
            (token) => { 
                console.log("success" + token)
                this.router.navigate(['/products'])
               },
              (err: HttpErrorResponse) => { 
                  console.error(err); 
                  this.errors = err.error.errors;
                  
                }
        )
    }
}
