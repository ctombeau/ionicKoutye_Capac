import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageModule } from './pages/user/login/login.module';
import { UserModule } from './pages/user/user.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { UserHomePage } from './pages/user/user-home/user-home.page';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { PopoverUpdateUserComponent } from './components/popover-update-user/popover-update-user.component';
//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [AppComponent, PopoverUpdateUserComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    UserModule,
    HttpClientModule
   // MatSpinnerModule
      ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     HttpClient,
     UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
     }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
