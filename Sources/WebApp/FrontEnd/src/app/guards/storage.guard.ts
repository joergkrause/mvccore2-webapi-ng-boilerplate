import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services';

@Injectable()
export class StorageGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
