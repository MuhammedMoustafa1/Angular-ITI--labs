import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../_Services/account.service';

export const canLoginGuard: CanActivateFn = (route, state) => {
  let accountService= inject(AccountService);
  if (accountService.isLogged) {
    return true;
  }
  let router = inject(Router);
  router.navigate(['login']);
  return false;
};
