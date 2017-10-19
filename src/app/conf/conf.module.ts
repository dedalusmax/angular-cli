import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfRoutingModule } from './conf-routing.module';
import { MainComponent } from './main/main.component';
import { MatTabsModule } from '@angular/material';
import { SessionsComponent } from './sessions/sessions.component';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
  imports: [
    CommonModule,
    ConfRoutingModule,
    MatTabsModule
  ],
  declarations: [MainComponent, SessionsComponent, SpeakersComponent]
})
export class ConfModule { }
