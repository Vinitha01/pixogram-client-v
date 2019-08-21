import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Media } from 'src/model/media';

@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.css']
})
export class MediaDetailComponent implements OnInit {

  mediaDetails: Media;
  description: String;
  tags: String;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.mediaDetails$.subscribe(m => this.mediaDetails = m);
    this.description = this.mediaDetails.description;
    this.tags = this.mediaDetails.tags;
  }

  onSubmit() {

  }
}
