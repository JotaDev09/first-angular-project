import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  images = ['IMG_8554.jpeg', 'IMG_8670.jpeg', 'IMG_8844.jpeg'];
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

    }, 8000)
  }
}
