import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  vh100:object={};

  ngAfterViewChecked(): void {
    this.vh100={
      marginTop: `${this.childNav.nav.nativeElement.clientHeight}px`,
      minHeight: `calc(100vh - ${this.childNav.nav.nativeElement.clientHeight}px)`
    }
  }
  @ViewChild(NavBarComponent) childNav!:NavBarComponent;



  title = 'project-one';
}
