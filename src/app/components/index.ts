import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HadisLogoComponent } from './hadis-logo/hadis-logo.component';
import { HadisListItemComponent } from './hadis-list-item/hadis-list-item.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HadisTextComponent } from './hadis-text/hadis-text.component';


export const COMPONENTS = [
  HadisLogoComponent,
  HadisListItemComponent,
  LoadButtonComponent,
  NavigationComponent,
  FooterComponent,
  HadisTextComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
