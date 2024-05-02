import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageModule } from './pages/user/login/login.module';
import { UserModule } from './pages/user/user.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { UserDetailPage } from './pages/user/user-detail/user-detail.page';
import { UserHomePage } from './pages/user/user-home/user-home.page';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    UserModule,
    HttpClientModule
      ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     HttpClient,
     UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
