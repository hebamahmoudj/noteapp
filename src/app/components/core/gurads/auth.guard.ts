import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const authservice=inject(AuthService);
 let data:any=null
  authservice.user.subscribe({next:(res)=>{data=res}
  
  })
  if(authservice.user.getValue() !=null){
    // console.log(data);
    // router.navigate(['/home'])
    
    return true;
  }
  else{
    router.navigate(['/login'])
    return false;
  }
  
};
