import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    title: 'inefficient Change Detection',
    path: 'inefficient',
    loadComponent: () => import('./example/example.component'),
  },
  {
    title: 'Unoptimized Third-Party Libraries',
    path: 'third-party-Libraries',
    loadComponent: () =>
      import('./example-two/example-two.component').then(
        (c) => c.ExampleTwoComponent
      ),
    data: { preload: true },
  },
  {
    title: ' Ignoring Lazy Loading',
    path: 'ignoring-lazy-loading',
    loadComponent: () =>
      import('./example-three/example-three.component').then(
        (c) => c.ExampleThreeComponent
      ),
    data: { preload: true },
  },
  {
    title: 'Excessive Use of Watchers',
    path: 'excessive-watchers',
    loadComponent: () =>
      import('./example-fourth/example-fourth.component').then(
        (c) => c.ExampleFourthComponent
      ),
  },
  {
    title: 'not optimizing for production',
    path: 'not-optimizing-for-production',
    loadComponent: () =>
      import('./example-fifth/example-fifth.component').then(
        (c) => c.ExampleFifthComponent
      ),
  },
  {
    title: 'Neglecting Ahead-Of-Time (AOT) Compilation',
    path: 'neglecting-ahead-of-time',
    loadComponent: () =>
      import('./example-six/example-six.component').then(
        (c) => c.ExampleSixComponent
      ),
  },
  {
    title: 'Ignoring Memory Leaks',
    path: 'ignoring-memory-leaks',
    loadComponent: () =>
      import('./example-seventh/example-seventh.component').then(
        (c) => c.ExampleSeventhComponent
      ),
  },

  {
    title: 'Inefficient Template Rendering',
    path: 'inefficient-template-rendering',
    loadComponent: () =>
      import('./example-eighth/example-eighth.component').then(
        (c) => c.ExampleEighthComponent
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },
];
