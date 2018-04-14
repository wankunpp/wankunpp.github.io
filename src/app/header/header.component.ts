import { Component, OnInit, HostListener } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggin :boolean=false;

  constructor(private authService:AuthenticationService) {
    
   }

  ngOnInit() {
    this.isLoggin=this.authService.loggedIn;
    this.authService.StatusChanged.subscribe(
      (isloggedin)=>{
        this.isLoggin = isloggedin;
      }
    )
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset
    if(scrollPosition > 30) return 'white';
  }

  logout(){
    this.authService.logout();
    this.authService.StatusChanged.next(this.authService.loggedIn);
  }

}
