import { NgModule } from "@angular/core";
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photos-list.module';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo.module';
import { CardModule } from '../shared/components/card/card.module';


@NgModule({
    declarations :[PhotosComponent],
    imports: [
        PhotoModule,
        CardModule,
        CommonModule
    ],
    exports: [PhotosComponent],
    
})
export class PhotosModule{}