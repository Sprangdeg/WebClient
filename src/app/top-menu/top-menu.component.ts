import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { routing } from '../app.routing';


@Component({

  selector: 'top-menu',
  templateUrl: 'top-menu.component.html',
  styleUrls: ['top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  title = 'BONSTROM.SE';
  constructor() { }

  ngOnInit() {
  }

}
