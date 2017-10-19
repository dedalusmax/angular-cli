import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SpeakersComponent } from './speakers/speakers.component';

const routes: Routes = [
  { path: 'conf', component: MainComponent, children: [
    { path: 'sessions', component: SessionsComponent },
    { path: 'speakers', component: SpeakersComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfRoutingModule { }
