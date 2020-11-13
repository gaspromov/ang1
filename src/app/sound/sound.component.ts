import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http/http.service';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.css']
})
export class SoundComponent implements OnInit {
  sounds: any = [];
  constructor(
    private http: HttpService,
  ) { }

  async ngOnInit() {
    this.sounds = await this.http.getItems('sounds');
    console.log(this.sounds);
  }

}
