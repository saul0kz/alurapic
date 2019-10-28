import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotosModule } from '../photos.module';
import { SearchInputComponent } from './search-input/search-input.component';





@NgModule({
    declarations: [PhotoListComponent, LoadButtonComponent,  FilterByDescriptionPipe, SearchInputComponent],

    imports: [CommonModule, PhotosModule]
})
export class PhotoListModule { }