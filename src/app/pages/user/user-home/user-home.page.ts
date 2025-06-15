import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PopoverController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { PopoverUpdateUserComponent } from 'src/app/components/popover-update-user/popover-update-user.component';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss']
})
export class UserHomePage implements OnInit, AfterViewInit {

  @Input('tabSegment') tabSegment? : HTMLIonSegmentElement ;

  constructor(private router: Router,
    private userService : UserService,
    private popoverCtrl: PopoverController
  ) { }
  @Input() showTabs = false;
  
  user : any;
  nom: any= "";
  prenom: any= "";
  id: any = sessionStorage.getItem("id") ?? "" ;; //+this.user.utilisateurId;
  username: any= sessionStorage.getItem("username");
  email: any= sessionStorage.getItem("email");
  type: any= "";
  phone: string= "";
  photo: string = sessionStorage.getItem("photo") ?? "";
  index= this.photo?.lastIndexOf("assets");
  subPhoto : string= this.photo?.substring(this.index);
  imageUrl: string | ArrayBuffer | null= this.subPhoto=="" ? "assets/images/user.jpg" : this.subPhoto;
  selectedFile: File | null = null;
  usernameIsChanged : boolean = false;
  isLoading : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  users! : User[];

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
    this.getUser(); 
    this.attachUser();
  }
 
  courtierForm = new FormGroup({
    email : new FormControl("",[
       Validators.required,
    ]),
    
  })
  
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
      
    } catch (error) {
      console.error("Erreur lors du choix de l'image : ", error);
    }
  }
  
  public getUser() : void
    {
       console.log("On test getUser()");
       this.userService.getUser(this.username).subscribe(
           (data: any)=>{
               this.user = data.object;
               this.nom = data.object.nom;
               this.prenom= data.object.prenom;
               this.username = data.object.username;
               this.email = data.object.email;
               this.type = data.object.nomType;
               this.phone = data.object.phone;
               this.photo = data.object.photo;
           },
           (error: HttpErrorResponse)=>{
              console.log("erreur constatee: "+ error.message);
           }
       );
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

  attachUser()
  {
    this.userService.getAttachUsers(this.username?? "").subscribe(
       (data: any)=>{
           this.users = (data.object ?? []).map((user: User) => ({
                     ...user,
                photo: user.photo ? user.photo.substring(user.photo.lastIndexOf("assets")) : 'assets/images/user.jpg'
           }));
           
           console.log(this.users)
       },(error : HttpErrorResponse)=>{
            Swal.fire({
                text: "Erreur lors de la récupération des utilisateurs.",
                icon: "error",
                width:'200px',
                heightAuto:false
           });
       });
 }

  updateUser(user: User){
  
    this.userService.putUser(this.id,user).subscribe(
        (response: any)=>{
         console.log(response.success)
          if(response.success==true){
              if(this.usernameIsChanged==true){
               Swal.fire({text:'Utilisateur modifié avec succès',
                icon:'success',
                width:'200px',
                heightAuto:false
              }).then((result)=>{
                      if(result.isConfirmed) {
                        this.getUser();
                        this.router.navigateByUrl('/');
                      }  
                 });
              }
              else{
               Swal.fire({text:'Utilisateur modifié avec succès',
                icon:'success',
                width:'200px',
                heightAuto:false
                }).then((result)=>{
                      if(result.isConfirmed) {
                         this.getUser(); 
                         this.router.navigateByUrl(this.router.url);
                      }  
                 });
              }
          }

        },(error: HttpErrorResponse)=>{
            if(error.status===500){
               console.log(error)
            }
      })
   
  }


  async showPopover(ev : any){
     const popover = await this.popoverCtrl.create({
        component: PopoverUpdateUserComponent,
        event: ev,
        translucent: false,
        showBackdrop:true,
        componentProps:{
              nom: this.nom,
              prenom:this.prenom,
              username:this.username,
              email:this.email,
              phone:this.phone
        }
        
     })
     console.log(ev)
     await popover.present();

     const {data} = await popover.onDidDismiss();
     if(data){
        
        console.log("Formulaire soumis avec: ", data)
        //const user  = new User(nom, prenom, username, email, "", "", phone, "");
          if(data.username!==this.username){
             this.usernameIsChanged=true;
             this.updateUser(data);
          }
          else{
              this.usernameIsChanged=false;
              this.updateUser(data);
          }
     }
  }

  askToAttachUser(){
    this.isLoading.next(true);
    const emailFrom = this.email??"";
    const emailTo= this.courtierForm.value.email?? "";
    this.userService.sendMailAttachUser(emailFrom, emailTo).subscribe((response : any)=>{
          this.isLoading.next(false);
            if(response.success===true){
               //this.utilsService.showMessage("Mail envoyé avec succès.", "success")
               Swal.fire({
                  text: "Mail envoyé avec succès.",
                  icon: "success",
                  width: '200px',
                  heightAuto: false
              });
              this.courtierForm.reset();
            }
            else{
              //this.utilsService.showMessage("Erreur lors de l'envoi d'email.", "error")
              Swal.fire({
                text: "Erreur lors de l'envoi d'email.",
                icon: "error",
                width: '200px',
                heightAuto: false
               });
               this.courtierForm.reset();
            }
      }, (error : HttpErrorResponse)=>{
              this.isLoading.next(false);
              Swal.fire({
                text: "Erreur lors de l'envoi d'email.",
                icon: "error",
                width: '200px',
                heightAuto: false
               });
               this.courtierForm.reset();
      });
 }
 
  detachUser(usernameCour : string, nom: string, prenom: string){
    Swal.fire({
      title: nom + " " + prenom,
      text: "Voulez-vous le supprimer?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, Supprimez-le",
      cancelButtonText:"Annuler",
      width:'200px',
      heightAuto: false
      }).then((result) => {
          if (result.isConfirmed) {
                this.userService.processDetachUser(this.username??"",usernameCour).subscribe(
                   (data)=>{
                          Swal.fire({
                      title: "Supprimé!",
                      text: "Votre courtier a été supprimé.",
                      icon: "success",
                      width:'200px',
                      heightAuto: false
                    });
                   },(error: HttpErrorResponse)=>{
                      
                       Swal.fire({
                        title: "Supprimé!",
                        text: "Erreur lors de la suppression.",
                        icon: "error",
                        width:'200px',
                        heightAuto: false
                     });
                   }
                )
           }
      });
  }
}
