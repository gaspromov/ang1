import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http/http.service';

@Component({
  selector: 'app-mother',
  templateUrl: './mother.component.html',
  styleUrls: ['./mother.component.css']
})
export class MotherComponent implements OnInit {
  mothers: any = [];
  constructor(
    private http: HttpService,
  ) { }

  async ngOnInit() {
    this.mothers = await this.http.getItems('mothers');
    console.log(this.mothers);
    
  }

}
