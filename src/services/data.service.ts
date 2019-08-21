import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Media } from 'src/model/media';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private mediaDetailsSource = new BehaviorSubject<Media>(new Media());
  mediaDetails$ = this.mediaDetailsSource.asObservable();

  constructor() { }

  sendMediaDetails(m: Media) {
    this.mediaDetailsSource.next(m);
  }
}
