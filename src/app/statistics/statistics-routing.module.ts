import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsHomeComponent } from './stats-home/stats-home.component';
import { AnovaComponent } from '../statistics/anova/anova.component';
import { ShapiroComponent } from '../statistics/shapiro/shapiro.component';
import { SpearmanComponent } from '../statistics/spearman/spearman.component';
import { MedianComponent } from '../statistics/median/median.component';

const routes: Routes = [
  {
    path: '',
    component: StatsHomeComponent,
    children: [
      { path: '', component: AnovaComponent },
      { path: 'spearman', component: SpearmanComponent },
      { path: 'shapiro', component: ShapiroComponent },
      { path: 'median', component: MedianComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}
