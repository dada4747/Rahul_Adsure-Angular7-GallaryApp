import { Component, OnInit } from '@angular/core';
import{ ImageService} from './shared/image.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service:ImageService) { }
  ngOnInit() {
    this.service.getImageDetailList();
  }

  title = 'ragallary';
}
