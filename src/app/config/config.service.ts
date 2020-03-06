import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService implements OnInit{
  configurl = 'http://localhost:8081/api/authenticate'
  constructor(private http: HttpClient) { }
  ngOnInit() {
    return this.http.get(this.configurl)
    .subscribe(res => console.log(res));
  }
  
}