import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-landing-portion',
  templateUrl: './first-landing-portion.component.html',
  styleUrls: ['./first-landing-portion.component.css']
})
export class FirstLandingPortionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('here')
    
  }
  changeVideo(name: string){
    const video = document.getElementById('myVideo');
    
  }
}
