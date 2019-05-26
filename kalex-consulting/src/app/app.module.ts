import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { KxImageComponent } from './components/atoms/kx-image/kx-image.component';
import { KxStageHeaderComponent } from './components/organisms/kx-stage-header/kx-stage-header.component';
import { KxTeaserComponent } from './components/molecules/kx-teaser/kx-teaser.component';
import { KxHeadingComponent } from './components/atoms/kx-heading/kx-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    KxImageComponent,
    KxStageHeaderComponent,
    KxTeaserComponent,
    KxHeadingComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
