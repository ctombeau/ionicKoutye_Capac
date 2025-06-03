import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private formBuilder : FormBuilder,
    private router : Router,
    private userService : UserService
  ) { }

   forgotPasswordForm = this.formBuilder.group({
       email : ["", Validators.compose([Validators.required, Validators.email])]
      
   });

  ngOnInit() {
  }
  

  public forgotPassword()
  { 
     const email = this.forgotPasswordForm.value.email ?? "";
     this.isLoading.next(true);
     this.userService.processForgotPassword(email).pipe(
        map((response : any)=>{
              if(response.success===true)
              {
                   this.isLoading.next(false);
                   this.forgotPasswordForm.reset();  
                   Swal.fire({
                      text: "Mail envoyé avec succès...",
                      width:'200px',
                      icon: 'success',
                      heightAuto: false
                  }).then((result) => {
                    if (result.isConfirmed) {
                        this.router.navigate(['/']);
                    }
                  });  
                  
              }
              else{
                this.isLoading.next(false);
                Swal.fire({
                      text: "Erreur lors de l'envoi d'email...",
                      width:'200px',
                      icon: 'error',
                      heightAuto: false
                  });
              }
            }),
            catchError((error : Error)=>{
               this.isLoading.next(false);
                Swal.fire({
                      text: "Erreur lors de l'envoi d'email...",
                      width:'200px',
                      icon: 'error',
                      heightAuto: false
                  });
                return "";
            })
     ).subscribe();
  }

  public backToLogin(){
      this.router.navigate(['/']);
  }
}
