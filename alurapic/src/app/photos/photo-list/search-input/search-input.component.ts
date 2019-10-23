import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();
  
  @Input() value: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnDestroy(): void {
    this.debounce.unsubscribe;
  }
   

  ngOnInit(): void {
   
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.onTyping.emit(filter));

  }

}
