import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(event : any){
    this.menuOpen = !this.menuOpen;
  }


}
