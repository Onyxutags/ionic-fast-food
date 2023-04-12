import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsLogoutGuard } from './core/guards/is-logout.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./ideas/ideas.module').then((m) => m.IdeasPageModule),
  },
  {
    path: 'create',
    canActivate: [IsLogoutGuard],
    loadChildren: () =>
      import('./create-idea/create-idea.module').then(
        (m) => m.CreateIdeaPageModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}