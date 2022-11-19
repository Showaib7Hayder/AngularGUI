import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'data',
    loadChildren: () => import('./data/data.module').then((m) => m.DataModule),
  },
  {
    path: 'stats',
    loadChildren: () =>
      import('./statistics/statistics.module').then((a) => a.StatisticsModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
