import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../menu-items.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  MenuItems: any = [];

  constructor(private menuItemService: MenuItemsService) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.menuItemService.getMenuList().subscribe(items => {
        items.map(it => {
          if ( it instanceof Array ) {
            it.map(i => {
              this.MenuItems.push(i);
            });
          }
        });
      });
  }
}
