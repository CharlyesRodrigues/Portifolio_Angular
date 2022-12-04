import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  lista1 : Array<string> = [
    "JavaScript",
    "React",
    "Vue Js", 
    "Tailwind CSS"
  ];

  
  constructor(){}
  ngOnInit(): void {
    
}

}
