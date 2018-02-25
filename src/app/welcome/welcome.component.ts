import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  path = '../../assets/i1.jpg';
  paths: string [] = [
    '../../assets/i1.jpg',
    '../../assets/i2.jpg',
    '../../assets/i3.jpg',
    '../../assets/i4.jpg'
  ];
  i = 0;

  ngOnInit(): void {
    setInterval(this.image.bind(this), 3000);
  }

  image() {
    this.path = this.paths[(this.i++) % 4];
  }

}
