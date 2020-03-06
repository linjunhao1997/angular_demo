import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ant-study';
  configurl = 'http://localhost:8081/api/authenticate'
  body:String = JSON.stringify({'username':'admin', "password":"admin"})
  constructor(private http: HttpClient) { }
  connect() {
    return this.http.post(this.configurl,this.body)
    .subscribe(res => console.log(res));
  }

}
