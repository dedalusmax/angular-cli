import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfRoutingModule } from './conf-routing.module';
import { MainComponent } from './main/main.component';
import { MatTabsModule, MatTableModule, MatCardModule, MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { SessionsComponent } from './sessions/sessions.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SessionService } from './shared/services/session.service';
import { NewSessionComponent } from './new-session/new-session.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConfRoutingModule,
    MatTabsModule, MatTableModule, MatCardModule, MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule
  ],
  declarations: [MainComponent, SessionsComponent, SpeakersComponent, NewSessionComponent],
  providers: [SessionService]
})
export class ConfModule { }
