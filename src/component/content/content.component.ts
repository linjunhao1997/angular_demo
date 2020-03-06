import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  private noteId: String

  constructor(activeRoute: ActivatedRoute) {
  //  this.md = activeRoute.snapshot.params["md"];
   // this.d = activeRoute.snapshot.params["d"];

    activeRoute.params.subscribe(params => {
      this.noteId = params["noteId"];
    })
  }

  ngOnInit() {
  }

}
