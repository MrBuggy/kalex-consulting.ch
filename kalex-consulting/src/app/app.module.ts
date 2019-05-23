import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { KxImageComponent } from './components/atoms/kx-image/kx-image.component';
import { KxStageHeaderComponent } from './components/organisms/kx-stage-header/kx-stage-header.component';

@NgModule({
  declarations: [
    AppComponent,
    KxImageComponent,
    KxStageHeaderComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
