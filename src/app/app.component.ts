import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hero';
  heroname ='蓋倫';
  price = 100
  gender = 1
  Pic = '../assets/img/w644.jpg'
  dec = 'img'
  get job():string{ //這是屬性 get 屬性
    return '戰士';
  }
  getVal():number{  //這是方法
    return 33;
  }
}
