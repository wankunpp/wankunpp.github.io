import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RatesComponent } from './rates/rates.component';
import { ContactComponent } from './contact/contact.component';
import {LoginComponent} from './auth/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceComponent } from './service/service.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CosmeticsComponent } from './service/cosmetics/cosmetics.component';
import { CosmeDetailComponent } from './service/cosmetics/cosme-detail/cosme-detail.component';
import { RegisterComponent } from './auth/register/register.component';
import { AlertComponent } from './auth/alert/alert.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AgmCoreModule } from '@agm/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CosmeticsService } from './service/cosmetics/cosmetics.services';
import { UserService } from './auth/user/user.service';
import { AlertService } from './auth/alert/alert.service';
import { AuthenticationService } from './auth/authentication.service';

import { AuthGuard } from './auth/auth-guard.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartService } from './shopping-cart/cart.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    RatesComponent,
    ContactComponent,
    LoginComponent,
    HomepageComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    CosmeticsComponent,
    CosmeDetailComponent,
    AlertComponent,
    RegisterComponent,
    ShoppingCartComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1WkwOaj1w7_KPBS640_8R99UVThmjDu0'
    }),
    AppRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),

  ],
  providers: [CosmeticsService,
              UserService,
              AlertService,
              AuthenticationService,
              AuthGuard,
              CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
