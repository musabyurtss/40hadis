import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HadisListComponent } from './hadis-list/hadis-list.component';
import { HadisListItemComponent } from './hadis-list-item/hadis-list-item.component';
import { HadisDetailComponent } from './hadis-detail/hadis-detail.component';
import { LayoutComponent } from './layout/layout.component';


export const COMPONENTS = [
  HadisListComponent,
  HadisListItemComponent,
  HadisDetailComponent,
  LayoutComponent
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
