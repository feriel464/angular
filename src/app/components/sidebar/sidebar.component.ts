import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',class:'', icon: 'ni-tv-2 text-primary'},
   
    { path: '/calendrier', title: 'Calendrier', class: '', icon: 'ni-calendar-grid-58' },
    { path: '/user-profile', title: 'User profile',   class: '', icon: 'ni-single-02 text-yellow' },
    { path: '/tables', title: 'Tables',   class: '', icon: 'ni-bullet-list-67 text-red' },
    { path: '/login', title: 'Login', class: '', icon: 'ni-key-25 text-info' },
    { path: '/register', title: 'Register', class: '', icon: 'ni-circle-08 text-pink' },
    {path: '/message' , title: '',class:'',icon:''},
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {
    this.menuItems=[]; 
   }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

}
