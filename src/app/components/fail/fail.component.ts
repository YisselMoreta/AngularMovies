import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as Parallax from 'parallax-js';
@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss']
})
export class FailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit (){
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true
    })
  }

}
