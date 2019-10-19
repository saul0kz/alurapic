import { Component, OnInit, OnDestroy } from '@angular/core';

import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {


  photos: Photo[] = [];
  filter: String = "";
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = false;
  userName: string = "";
  currentPage: number = 1;


  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
   this.activatedRoute.snapshot.params.page;
    
    this.hasMore = true;
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter);
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe;
  }

  load() {
    console.log("load");
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        
        this.photos = this.photos.concat(photos);
        if (photos.length < 12) this.hasMore = false;
      });
  }


}
