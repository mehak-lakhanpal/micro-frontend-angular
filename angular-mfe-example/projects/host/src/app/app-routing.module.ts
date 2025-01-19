import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'insurance-details',
    loadChildren: () =>
      import('remoteapp1/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'premium',
    loadChildren: () =>
      import('remoteapp2/homeModule').then((module) => module.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
