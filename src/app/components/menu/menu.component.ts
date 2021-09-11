import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  
  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'Random Quote',
              routerLink:'/',
              icon:'pi pi-spin pi-spinner'
          },
          {
              label: 'Generate 2 random quotes',
              icon: 'pi pi-check',
              routerLink:'quote'
          }
      ];
  }

}
