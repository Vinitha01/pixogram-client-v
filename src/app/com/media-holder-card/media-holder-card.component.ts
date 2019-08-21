import { Component, OnInit, Input } from '@angular/core';
import { Media } from 'src/model/media';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-media-holder-card',
  templateUrl: './media-holder-card.component.html',
  styleUrls: ['./media-holder-card.component.css']
})
export class MediaHolderCardComponent implements OnInit {

  @Input()
  mediaDetails: Media;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    
  }

  sendMediaDetails(id){
    console.log(id);
    this.dataService.sendMediaDetails(this.mediaDetails);
  }

}
