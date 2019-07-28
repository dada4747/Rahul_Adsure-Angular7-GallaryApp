import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  isShown:boolean=false;
  constructor(private service:ImageService) { }

  ngOnInit() {
  }

}
