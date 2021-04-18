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
  colSpan =2
  IsDisable=false
  cust="cust-title"
  cust2="又是title"
  show = false
  user2={
    Pic :this.Pic,
    dec :'img', 
    dec1: this.dec
  }
  
  btnIsDisable=true
  btnCls  = 'btn btn-primary';
  btnCls2 = ['btn','btn-info'];
  btnCls3 ={  
    btn :true,
    'btn-secondry':true
  } 
  
  style1 = 'color:red;border:1px solid;'
  style2 = ['color','bule'];  //數組怪怪的?
  style3 ={
    color: '#BF3349',
    backgroundColor: '#db6923',
    width: '200px',
    height: '50px',
    'text-align': 'center',
    border: '1px solid'
  } 
  
  //@Input 控制彈窗變數  預設false
  showModal = false


  get job():string{ //這是屬性 get 屬性
    return '戰士';
  }
  getVal():number{  //這是方法
    return 33;
  }

  onCloseget(){
    console.log('接收onclose')
    //接收到onClose 發射出來的訊號,將showModal改成false關閉視窗
    this.showModal = false
  }
  onBackDropClickget(){
    console.log('背景接收onclose')
    //接收到onClose 發射出來的訊號,將showModal改成false關閉視窗
    this.showModal = false
  }
  onConfrimget(){
    console.log('背景接收onconfrim')
  }
}
