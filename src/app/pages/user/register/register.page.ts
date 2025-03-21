import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraResultType,CameraSource, GalleryImageOptions, ImageOptions } from '@capacitor/camera';
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { BehaviorSubject, catchError, map, of, shareReplay } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { IonAlert, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @Input('inputImage') inputImage! : ElementRef ;
  imgUri : string="";
  base64?: string = "";
  cameraActive: boolean= false;
  imgCamera: string[] = [];
  message$ : BehaviorSubject<string> = new BehaviorSubject<string>("");
  isLoading: boolean = true;
  isAlertOpen = true;
  alertButtons = ['OK'];

  constructor(
    private router: Router,
    private actionsheet: ActionSheetController,
    private formBuilder: FormBuilder,
    private userService : UserService
    ) { }

  ngOnInit() {
    Camera.requestPermissions({permissions:['photos']});
  }
   
     registerForm = this.formBuilder.group({
      nom: ["",Validators.required],
      prenom:["",Validators.required],
      username: ["", Validators.required],
      email: ["",[Validators.required, Validators.email]],
      password: ["",Validators.required],
      confirmPassword: ["",Validators.required],
      phone : ["", Validators.required],
      typeUser: ["",Validators.required]
      
  });

 
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  public register(){
     var nom = this.registerForm.value.nom ?? "";
     var prenom = this.registerForm.value.prenom ?? "";
     var username = this.registerForm.value.username ?? "";
     var email = this.registerForm.value.email ?? "";
     var password = this.registerForm.value.password ?? "";
     var confirmPassword = this.registerForm.value.confirmPassword?? "";
     var phone = this.registerForm.value.phone?? "";
     var photo="";
     var typeUser = this.registerForm.value.typeUser?? "";

     var user = new User(nom,prenom,username,email,password,photo,phone,typeUser);

     if (nom !="" && prenom !="" && username != "" && email != "" && password != "" && phone != "" &&typeUser !="")
      {
           if(password == confirmPassword)
           {
               this.message$.next("");
               this.userService.postUser(user).pipe(
                   map((response)=>{
                    if(response.success===true)
                      {
                         this.setOpen(true);
                         this.router.navigate(['/']);
                         shareReplay();
                      }
                      else{
                         this.message$.next("Problème lors de l'enregistrement")
                      }
                   }),
                   catchError((err: HttpErrorResponse)=>{
                    if(err.status===500 || err.status===0){
                      this.message$.next("Nous avons rencontré un problème serveur.");
                    }
                    else if(err.status===409){
                      this.message$.next("L'utilisateur existe déja.");
                    }
                    return "";
                })
               ).subscribe();
           }
           else
           {
              this.message$.next("Les mots de passe sont différents.");
              
           }
      }
      else
      {
          this.message$.next("Les champs sont obligatoires.");
      }
     
  }
  
  public backToLogin(): void
  {
     this.router.navigate(['']);
  }
 
  async selectImageOptions()
  {
     const actionsheet = await this.actionsheet.create({
         buttons: [
           {
             text: 'Select Image from Gallery',
             handler:()=>{
                console.log("image selected from Gallery");
                this.getGallery();
             }
           },
           {
            text: 'Select Camera',
            handler:()=>{
               console.log("Camera selected");
               this.getCamera();
            }
           },
           {
              text: 'Cancel',
              role:'Cancel'
           }
         ]
     });
     await actionsheet.present();
  }

  
  getCamera() {
    
    
    const options: ImageOptions = {
      quality: 100,
      resultType: CameraResultType.DataUrl
      
    }
    // CameraPreview.start(options);
    // this.cameraActive = true;
    Camera.getPhoto(options).then((result?)=>{
      if(result !=null)
      {
        this.imgCamera.push(result.dataUrl?? "");
        console.log(this.base64);
      }
      else
      {

      }
  },
  (error)=>{
       alert(error);
  });

  }



  getGallery()
  {
    var options : GalleryImageOptions={
       //source: CameraSource.Photos,
       //resultType: CameraResultType.DataUrl,
       correctOrientation: true
       
    }
    Camera.pickImages(options).then((result)=>{
        if(result !=null)
        {
          var images =result.photos;
          console.log(images);
        }
        else
        {

        }
    },
    (error)=>{
         alert(error);
    });
  }
}
