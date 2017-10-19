import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfRoutingModule } from './conf-routing.module';
import { MainComponent } from './main/main.component';
import { MatTabsModule, MatTableModule } from '@angular/material';
import { SessionsComponent } from './sessions/sessions.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SessionService } from './shared/services/session.service';

@NgModule({
  imports: [
    CommonModule,
    ConfRoutingModule,
    MatTabsModule, MatTableModule
  ],
  declarations: [MainComponent, SessionsComponent, SpeakersComponent],
  providers: [SessionService]
})
export class ConfModule { }
