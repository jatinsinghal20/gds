import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {

  images: string[] = [
    '../../assets/i1.jpg',
    '../../assets/i2.jpg',
    '../../assets/i3.jpg',
    '../../assets/i4.jpg',
    '../../assets/i1.jpg',
    '../../assets/i1.jpg',
    '../../assets/i2.jpg',
    '../../assets/i3.jpg',
    '../../assets/i4.jpg',
    '../../assets/i1.jpg',
    '../../assets/i1.jpg',
    '../../assets/i2.jpg',
    '../../assets/i3.jpg',
    '../../assets/i4.jpg',
    '../../assets/i1.jpg',
    '../../assets/i1.jpg',
    '../../assets/i2.jpg',
    '../../assets/i3.jpg',
    '../../assets/i4.jpg',
    '../../assets/i1.jpg',
    '../../assets/i1.jpg',
    '../../assets/i2.jpg',
    '../../assets/i3.jpg',
    '../../assets/i4.jpg',
    '../../assets/i1.jpg',
    '../../assets/i1.jpg',
    '../../assets/i2.jpg',
    '../../assets/i3.jpg',
    '../../assets/i4.jpg',
    '../../assets/i1.jpg',
    '../../assets/i1.jpg',
    '../../assets/i2.jpg',
    '../../assets/i3.jpg',
    '../../assets/i4.jpg',
    '../../assets/i1.jpg',
    '../../assets/i1.jpg',
    '../../assets/i2.jpg',
    '../../assets/i3.jpg',
    '../../assets/i4.jpg',
    '../../assets/i1.jpg',
    '../../assets/i1.jpg',
    '../../assets/i2.jpg',
    '../../assets/i3.jpg',
    '../../assets/i4.jpg',
    '../../assets/i1.jpg',
    '../../assets/i1.jpg'
  ];

  showImage = '../../assets/i1.jpg';
  constructor() { }

  ngOnInit() {
    console.log("Gallery init");
  }

  change(image){
    this.showImage = image;
  }
}
