import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';


@NgModule({
    declarations: [PhotoFormComponent],
    exports: [PhotoFormComponent],
    imports: [CommonModule],
})
export class PhotoFormModule{}