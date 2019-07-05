import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  public innerHeight: any;
  ngOnInit() {
    this.innerHeight = window.innerHeight + document.documentElement.offsetHeight + 'px';
  }
  
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.innerHeight = window.innerHeight + document.documentElement.offsetHeight + 'px';
      
    });
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }
  getHeight() {
    const height = { 'height': this.innerHeight  }
    return height;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

