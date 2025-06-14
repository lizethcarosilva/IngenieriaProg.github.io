import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-global-menu',
  templateUrl: './global-menu.component.html',
  styleUrls: ['./global-menu.component.scss'],
  imports: [NgIf]
})
export class GlobalMenuComponent {
  isCollapsed = true;
  isHovered = false;
  isMobile = false;
  showProductoSubmenu = false;
  isBrowser: boolean;

  constructor(
    public router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showProductoSubmenu = event.url.includes('/producto');
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkScreenSize();
      this.showProductoSubmenu = this.router.url.includes('/producto');
    }
  }

  checkScreenSize() {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  toggleMenu() {
    if (this.isMobile) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  toggleProductoSubmenu(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.showProductoSubmenu = !this.showProductoSubmenu;
  }

  navigate(route: string): void {
    this.router.navigateByUrl(route).then(() => {
      if (this.isMobile) {
        this.isCollapsed = true;
      }
    });
  }
}
