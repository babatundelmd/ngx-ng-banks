import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxNgBanksComponent } from 'projects/ngx-ng-banks/src/public-api';

const routes: Routes = [
  {
    path: 'ngx-banks',
    component: NgxNgBanksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
