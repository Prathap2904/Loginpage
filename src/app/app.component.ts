import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'login';

  ngOnInit(): void {
    
  }
  Loginobj = new Login();

  login(){
    const localstorage = localStorage.getItem('angularcrud');
      const newarr:any= [];
      newarr.push(this.Loginobj)
      localStorage.setItem('angularcrud',JSON.stringify(newarr))
    
  }
}
export class Login{
  username:String ="";
  password:String = " ";

  constructor(){
    this.username=" ";
    this.password = " ";
  }
}
