import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/index';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,private router: Router) {}

  async canActivate() {
    const loggedIn = await this.authService.isLoggedIn();
    if (!loggedIn)
    {
       this.router.navigate(['/login']);
       return false;
    }

    return true;
  }
}