import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private routerService: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.routerService.events.subscribe(events => {
      if (events instanceof NavigationStart) {
        console.log(this.route);
        console.log(this.routerService);
      }
    })
  }

  navigate(url: string) {
    this.routerService.navigateByUrl(url);
  }
}
