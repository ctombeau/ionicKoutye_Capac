import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraResultType,CameraSource, GalleryImageOptions, ImageOptions } from '@capacitor/camera';
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';
import { FormBuilder, Validators } from '@angular/forms';

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
  
  constructor(
    private router: Router,
    private actionsheet: ActionSheetController,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    Camera.requestPermissions({permissions:['photos']});
  }
   
  registerForm = this.formBuilder.group({
      nom: ["",Validators.required],
      prenom:["",Validators.required],
      username: ["", Validators.required],
      email: ["",Validators.required],
      password: ["",Validators.required],
      confirmPassword: ["",Validators.required],
      typeUser: ["",Validators.required]
      
  });

  public register(){
    
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
