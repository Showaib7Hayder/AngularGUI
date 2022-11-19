import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatsHomeComponent } from './stats-home/stats-home.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { DataModule } from '../data/data.module';
import { AnovaComponent } from './anova/anova.component';
import { SpearmanComponent } from './spearman/spearman.component';
import { ShapiroComponent } from './shapiro/shapiro.component';
import { MedianComponent } from './median/median.component';

@NgModule({
  declarations: [StatsHomeComponent, MenuComponent, AnovaComponent, SpearmanComponent, ShapiroComponent, MedianComponent],
  imports: [CommonModule, StatisticsRoutingModule, SharedModule, DataModule],
  exports: [],
})
export class StatisticsModule {}
