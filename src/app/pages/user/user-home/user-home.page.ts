import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PopoverController } from '@ionic/angular';
import { PopoverUpdateUserComponent } from 'src/app/components/popover-update-user/popover-update-user.component';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit, AfterViewInit {

  @Input('tabSegment') tabSegment? : HTMLIonSegmentElement ;

  constructor(private router: Router,
    private userService : UserService,
    private popoverCtrl: PopoverController
  ) { }
  @Input() showTabs = false;

  nom: any= sessionStorage.getItem("nom");
  prenom: any= sessionStorage.getItem("prenom");
  username: any= sessionStorage.getItem("username");
  email: any= sessionStorage.getItem("email");
  type: any= sessionStorage.getItem("nomType");
  phone: string= sessionStorage.getItem("phone")?.toUpperCase() ?? "";
  photo: string = sessionStorage.getItem("photo") ?? "";
  index= this.photo?.lastIndexOf("assets");
  subPhoto : string= this.photo?.substring(this.index);
  imageUrl: string | ArrayBuffer | null= this.subPhoto=="" ? "assets/images/user.jpg" : this.subPhoto;
  selectedFile: File | null = null;

  @ViewChild('popover') popover!: HTMLIonPopoverElement;

  isOpen = false;

 

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  ngAfterViewInit(): void {
    console.log(this.tabSegment);
  }

  ngOnInit() {
    
  }
 
  
  async changeSegment(event : any)
  {
    /*
     const page = event.detail.value;
     switch(page)
     {
        case "profil": 
              await this.router.navigate(['/user-detail']);
              break;
        case "courtier": 
              await this.router.navigate(['/courtier']);
              break;
        case "favorites":
            break;
        default : 
             await this.router.navigate(['/user-detAIL']);
              break;
     }
     console.log(event.detail.value);
     */
  }
  
   goBack(){
       this.router.navigate(['/home']);
   }

   showMessage() {
     console.log("ouverture de la boite a message")
  }

  async takePicture(){
    
     try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false, 
        source: CameraSource.Camera, 
        resultType: CameraResultType.Uri 
      });

      this.imageUrl = image.webPath ?? ""; 
     
      
    } catch (error) {
      console.error("Erreur lors de la prise de photo : ", error);
      
    }
  }

  async chooseFromGallery() {
    
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        source: CameraSource.Photos, 
        resultType: CameraResultType.Uri
      });

      this.imageUrl = image.webPath ?? ""; 
      console.warn(this.imageUrl)
    } catch (error) {
      console.error("Erreur lors du choix de l'image : ", error);
    }
  }

  getPicture(event: any){
    console.log("Oui getPicture()")
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
       this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result; // Met l'URL de l'image dans `imageUrl`
      
      };

      reader.readAsDataURL(this.selectedFile); // Convertit le fichier en URL pour l'affichage
      if(this.selectedFile){
       const formData = new FormData();
       formData.append('username',this.username);
       formData.append('photo', this.selectedFile, this.selectedFile.name);
       console.log(formData)
       this.userService.setPicture(formData).subscribe(response => {
         console.log('Fichier téléchargé avec succès!', response);
       }, error => {
         console.error('Erreur de téléchargement', error);
       });
      }
    }
     
  }

  async showPopover(ev : any){
     const popover = await this.popoverCtrl.create({
        component: PopoverUpdateUserComponent,
        event: ev,
        translucent: false,
        showBackdrop:true
     })

     await popover.present();

     const {data} = await popover.onDidDismiss();
     if(data){
        console.log("Formulaire soumis avec: ", data)
     }
  }
 
}
