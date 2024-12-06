import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'app-common-practices-kill-performance';

  currentPath!: string;
  rootpage: boolean = false;
  private subscription!: Subscription;
  private ruta = inject(Router);
  private logService = inject(LogService);

  ngOnInit(): void {
    this.logService.info('Application initialized');
    this.logService.debug('Debugging information');

    this.subscription = this.ruta.events.subscribe((event) => {
      this.rootpage = false;
      if (event instanceof NavigationEnd) {
        this.currentPath = event.urlAfterRedirects;

        if (this.currentPath === '/home') {
          console.log('raiz');
          this.rootpage = true;
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Evitar fugas de memoria
  }
}
