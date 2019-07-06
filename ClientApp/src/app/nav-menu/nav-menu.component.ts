import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  public innerHeight: any

  ngOnInit() {
    this.innerHeight = window.innerHeight +'px';
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.innerHeight > 576) {
      this.innerHeight = window.innerHeight + window.pageYOffset + 'px'
    }
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

