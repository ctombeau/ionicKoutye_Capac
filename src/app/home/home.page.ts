import { Component, OnInit } from '@angular/core';
import { AppartementService } from '../services/appartement.service';
import { Observable, of } from 'rxjs';
import { Appartement } from '../model/appartement.model';
import { PushNotifications } from '@capacitor/push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  username : any = sessionStorage.getItem("username");
  constructor(private appService : AppartementService) {}
   
  ngOnInit(): void {
   // console.log("Dans home : "+this.username);
      this.listAppartementByUsername();
      //this.addListeners();
  }
   
    listAppartementByUsername(): Observable<Appartement[]>{
      console.log("dans home.ts");
        this.appService.getAllAppartementsByUsername(this.username).subscribe(
           (data)=>{
             console.log(data);
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
}
