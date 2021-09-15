import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  nombre : string;

  constructor() {
    this.nombre = "victor.ve"; 
  }

  ngOnInit() {
  }

}
