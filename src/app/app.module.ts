import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbInputModule, NbCardModule, NbButtonModule, NbRadioModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgLimeadeModule} from 'ng-limeade';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NgLimeadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
