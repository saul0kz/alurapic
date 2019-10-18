import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';
import * as lodash from 'lodash';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];

  rows: any[] = [];
 
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos)
      this.rows = lodash.chunk(this.photos, 3);
  }



}
