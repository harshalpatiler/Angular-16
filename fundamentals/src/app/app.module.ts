import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './customdirectives/highlight.directive';
import { HoverDirective } from './customdirectives/hover.directive';
import { AppClassDirective } from './customdirectives/app-class.directive';
import { StyleDirective } from './customdirectives/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HoverDirective,
    AppClassDirective,
    StyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
