import { NgModule } from "@angular/core";
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photos-list.module';



@NgModule({
    
    imports: [
        PhotoFormModule,
        PhotoListModule,                     
    ],
    
})
export class PhotosModule{}