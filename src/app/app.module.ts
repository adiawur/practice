import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { LoginComponent } from './component/login/login.component';
import { ProductComponent } from './component/product/product.component';
import { RegisterComponent } from './component/register/register.component';
import { DataService } from './services/data.service';
import { UserService } from './services/user.service'; // Import UserService
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import provideHttpClient and withFetch

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    AddProductComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    DataService,
    UserService, // Add UserService to providers
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
