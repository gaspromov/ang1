import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http/http.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  videos: any = [];
  constructor(
    private http: HttpService,
  ) { }

  async ngOnInit() {
    this.videos = await this.http.getItems('videos');
  }

}
