import { Component } from '@angular/core';

@Component({
  selector: 'app-example-three',
  imports: [],
  templateUrl: './example-three.component.html',
  styleUrl: './example-three.component.css',
})
export class ExampleThreeComponent {
  codeSnippet = `
  const routes: Routes = [
    {
      path: 'feature',
      loadChildren: () =>
        import('./feature/feature.module')
      .then((m) => m.FeatureModule),
    },
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
      routes, {
        preloadingStrategy:
          PreloadAllModules, // preloadingStrategy
      }),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
    `;

  codeSnippet2 = `
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class StandalonePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Preload only if the route has a custom flag
    if (route.data && route.data['preload']) {
      return load();
    }
    return of(null);
  }
}`;

  codeSnippet3 = `const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'example',
    loadComponent: () =>
      import('./example/example.component')
    .then((c) => c.ExampleComponent),
    data: { preload: true },
    //Indicate that this route must be preloaded <= HERE;
  },
];
`;

  codeSnippet4 = `export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions(),
      withPreloading(StandalonePreloadingStrategy)
       , <= HERE Implement StandalonePreloadingStrategy
    ),

  ],
};`;
}
