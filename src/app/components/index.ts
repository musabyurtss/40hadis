import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddHadisComponent } from './add-hadis/add-hadis.component';
import { HadisLogoComponent } from './hadis-logo/hadis-logo.component';
import { HadisListItemComponent } from './hadis-list-item/hadis-list-item.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';

export const COMPONENTS = [
  AddHadisComponent,
  HadisLogoComponent,
  HadisListItemComponent,
  LoadButtonComponent,
  NavigationComponent,
  ArticleComponent,
  FooterComponent
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
