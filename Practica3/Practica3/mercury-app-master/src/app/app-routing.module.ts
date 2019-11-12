import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'inbox/:active_user', loadChildren: './user/inbox/inbox.module#InboxPageModule' },
  { path: 'home-tabs', loadChildren: './user/home-tabs/home-tabs.module#HomeTabsPageModule' },
  { path: 'home-page', loadChildren: './admin/home-page/home-page.module#HomePagePageModule' },
  { path: 'edit-user', loadChildren: './admin/edit-user/edit-user.module#EditUserPageModule' },
  { path: 'edituser', loadChildren: './admin/edituser/edituser.module#EdituserPageModule' },
  { path: 'message/:active_user/:username', loadChildren: './user/message/message.module#MessagePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
