import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service'

@Component({
  selector: 'app-imageslist',
  templateUrl: './imageslist.component.html',
  styleUrls: ['./imageslist.component.css']
})
export class ImageslistComponent implements OnInit {
  imageList:any[];
  rowIndexArray:any[];
  
  constructor( private service:ImageService) { }

  ngOnInit() {
    this.service.imageDetailList.snapshotChanges().subscribe(
      list=>{
        this.imageList=list.map(item=>{return item.payload.val();});
        this.rowIndexArray=Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
      }
    );
  }

}
