import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit{
  
  images = ['IMG_8554.jpeg', 'IMG_8670.jpeg', 'IMG_8844.jpeg'];
  headlines = ['Enjoy Iceland in your holidays', 'Explore the natur', 'Bring nice memories back home']
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImages();
  }

  updateImages() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10)

    }, 5000)
  }

}
