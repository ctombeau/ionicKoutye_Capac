import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraResultType,CameraSource, ImageOptions } from '@capacitor/camera';
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';

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
  
  constructor(
    //private camera: Camera,
    private router: Router,
    private actionsheet: ActionSheetController,
    //private imagePicker: ImagePicker,
    //private file: File
    ) { }

  ngOnInit() {
    Camera.requestPermissions({permissions:['photos']});
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
    
    const options: CameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview'
      
    }
    CameraPreview.start(options);
    this.cameraActive = true;
    /*
    this.camera.getPicture(options).then((imageData) => {
      this.imgUri = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
    */
  }



  getGallery()
  {
    var options : ImageOptions={
       source: CameraSource.Photos,
       resultType: CameraResultType.DataUrl
    }
    Camera.getPhoto(options).then((result)=>{
        this.base64 =result.dataUrl;
    },
    (error)=>{
         alert(error);
    });
  }
}
