import { Component, OnInit } from '@angular/core';
import { AppartementService } from '../services/appartement.service';
import { Observable, of } from 'rxjs';
import { Appartement } from '../model/appartement.model';
import { PushNotifications } from '@capacitor/push-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  username : any = sessionStorage.getItem("username");
  apps: Appartement[]=[];

  constructor(private appService : AppartementService,
   private router: Router
  ) {}
   
  ngOnInit(): void {
      this.listAppartementByUsername();
  }
   
    listAppartementByUsername(): Observable<Appartement[]>{
        this.appService.getAllAppartementsByUsername(this.username).subscribe(
           (data:any)=>{
             this.apps=data.object;
             this.apps.forEach(app=> console.log(app))
             //console.log(this.apps)
           }
        );
        return of([]);
    }

    async scheduleNotification(){
      /*
      /  let options : ScheduleOptions={
            notifications:[
              {
                 id: 111,
                 title: "Reminder Notification",
                 body:"Explore new variety and offers",
                 largeBody:"Get 30% discounts on new products",
                 summaryText: "Exciting offers !!!"
              }
            ]
        }
        try{
           await LocalNotifications.schedule(options)
        }
        catch(ex){
           alert(JSON.stringify(ex))
        }
           */
    }
    /*
     addListeners = async()=>{
         await PushNotifications.addListener('registration',token=>{
             alert('Registration token: '+token.value);
         });

         await PushNotifications.addListener('registrationError',err=>{
            alert('Registration error: '+err.error);
        });

        await PushNotifications.addListener('pushNotificationActionPerformed',notification=>{
         alert('Push notification action performed: '+ notification.actionId + notification);
       });
     }
       */

     /*
      async registerPushNotifications(){
         let permStatus = await PushNotifications.checkPermissions();
         alert(JSON.stringify(permStatus));
         if(permStatus.receive ==='prompt'){
            permStatus=await PushNotifications.requestPermissions();
         }
         if(permStatus.receive !=='granted'){
            alert('User denied permissions!')
         }
         if(permStatus.receive ==='granted'){
            try{
               await PushNotifications.register();
            }
            catch(e){
               alert(JSON.stringify(e));
            }
         }
      }
      */

     /*
      getDeliveredNotifications = async()=>{
         const notificationList = await PushNotifications.getDeliveredNotifications();
         alert('delivered notifications '+JSON.stringify(notificationList));

      }
      */

      getDetailAppartment(){
      this.router.navigateByUrl('detail-appartement');
     }
}
