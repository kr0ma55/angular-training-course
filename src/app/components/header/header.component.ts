import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
 /*  heroes$: Observable<any[]> | undefined; */
  constructor(private routerService: Router,private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.routerService.events.subscribe(events => {
      if (events instanceof NavigationStart) {
        console.log(this.route);
        console.log(this.routerService);
    } 
    })
  }
  navigate(url:string){
    this.routerService.navigateByUrl(url);
  }
}
