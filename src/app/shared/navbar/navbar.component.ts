import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  rutas: Routes = routes.filter(
    (ruta) => ruta.path !== '' && ruta.path !== '**'
  );
}
