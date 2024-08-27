import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {
  // access ref in DOM
  @ViewChild('navRef') nav!: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log((<HTMLElement>this.nav.nativeElement).clientHeight);
  }

  animation(navbar: HTMLElement): void {
    window.scrollY > 30
      ? navbar.classList.remove('py-4')
      : navbar.classList.add('py-4')
  }

}
