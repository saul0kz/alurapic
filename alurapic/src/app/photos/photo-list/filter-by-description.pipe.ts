import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';
import lodash from 'lodash';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], descriptionQuery: string): any {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return lodash.filter(photos, function (f) { return f.description.trim().includes(descriptionQuery) })
    }
    else {
      return photos;
    }
  }

}
