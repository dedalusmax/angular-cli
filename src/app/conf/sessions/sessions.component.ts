import { Component, OnInit } from '@angular/core';
import {SessionService} from '../shared/services/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  displayedColumns = ['name', 'speaker', 'level', 'time'];
  constructor(private dataSource: SessionService) { }

  ngOnInit() {
  }

  newSession(session) {
    this.dataSource.add(session);
    this.dataSource = new SessionService();
  }
}
