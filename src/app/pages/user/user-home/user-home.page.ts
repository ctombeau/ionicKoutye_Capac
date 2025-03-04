import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit, AfterViewInit {

  @Input('tabSegment') tabSegment? : HTMLIonSegmentElement ;
  photo?: string = '/assets/images/user.jpg';

  constructor(private router: Router) { }
  @Input() showTabs = false;

  nom: any= sessionStorage.getItem("nom");
  prenom: any= sessionStorage.getItem("prenom");
  username: any= sessionStorage.getItem("username");
  email: any= sessionStorage.getItem("email");
  type: any= sessionStorage.getItem("nomType");

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
     console.log("on prend une photo")
     try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false, // Permet de couper ou pas l'image
        source: CameraSource.Camera, // Utilise la caméra pour prendre une photo
        resultType: CameraResultType.Uri // Retourne l'URI de l'image
      });

      this.photo = image.webPath; // URI de l'image pour l'affichage
    } catch (error) {
      console.error("Erreur lors de la prise de photo : ", error);
    }
  }

  async chooseFromGallery() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        source: CameraSource.Photos, // Sélectionner depuis la galerie
        resultType: CameraResultType.Uri
      });

      this.photo = image.webPath; // URI de l'image pour l'affichage
    } catch (error) {
      console.error("Erreur lors du choix de l'image : ", error);
    }
  }
 
}
