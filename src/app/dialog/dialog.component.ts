import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() show = true;  //傳入的值
  @Input() title = '';  
  @Input() confrimLabel = '確定';  
  @Input() cancelLabel = '取消'; 
  //用戶點了x時 ,onclose發射一個關閉視窗的訊號出去
  @Output() close = new EventEmitter(); 
  //用戶點了x背景時 ,BackDropClose發射一個關閉視窗的訊號出去
  @Output() BackDropClose = new EventEmitter(); 
  @Output() confrim = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(str:string ,event:MouseEvent) {
    console.log('點擊',str)
    console.log('event事件',event.target)
  }
  clickParent(){
    console.log('父')
  }
  clickChild(event:MouseEvent) {
    event.stopPropagation();
    console.log('子')
  }

  //不是所有event 都有value屬性
  //所以要確告訴他這是一個html input 事件
  //可以用下面on key in 比較快
  onKey(event:KeyboardEvent){
    console.log('oninput',(event.target as HTMLInputElement).value)
     
  }
  //將輸入字串丟給values dom再去呼叫values
  values=''
  onKeyin(value:string){
    this.values = value
     
  }
  
  onClose(){
     //用戶點了x時 ,onclose發射一個關閉視窗的訊號出去
     //給app.compoent 的oncloseget 接收到把視窗關閉
     console.log('onclose')
     this.close.emit();
  }

  onBackDropClick(){
    console.log('backclose')
    this.BackDropClose.emit();
  }

  onConfrim(){
    console.log('confrim')
    this.confrim.emit();
  }
}
