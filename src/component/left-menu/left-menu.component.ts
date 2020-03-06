import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  existMap: Map<string, Array<Object>> = new Map();
  notebookes: Array<NoteBook>
  notes: Object

  openMap: { [name: string]: boolean } = {
    
  };

  configurl = 'http://localhost:1111/syncjianshu'
  constructor(private http: HttpClient) { 
    
    
  }
  getNotebookes() {
    return this.http.get(this.configurl)
    .subscribe((res: Array<NoteBook>) => {
      console.log(res)
      this.notebookes = res;
      for ( let i = 0; i < res.length; i++) {
        this.openMap[this.notebookes[i].id] = false
      }
       
    });
  }
  getNotes(noteId : string, $event) {
    if (this.existMap == null || !this.existMap.has(noteId)) {
      return this.http.get('http://localhost:1111/notes/'+noteId)
       .subscribe((notes: Array<Object>) => {
        console.log(notes)
        this.notes = notes
        this.existMap.set(noteId, notes)
       
        console.log(this.existMap)
     
    })
    
   } 
  }
  ngOnInit() {
    this.getNotebookes()
  }

  /**
   * name
   */
  public route(value) {
    
  }

}
class NoteBook {
  id: string
  seq: string
  name: string
}
