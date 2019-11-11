import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { PhotoListModule } from './photos/photo-list/photos-list.module';
import { PhotoFormModule } from './photos/photo-form/photo-form.module';
import { SigninModule } from './home/signin/signin.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoListModule,
    PhotoFormModule,
    ErrorsModule,
    SigninModule,
    CoreModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
