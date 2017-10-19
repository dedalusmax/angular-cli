import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/services/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  items = [];
  constructor(private service: SessionService) { }

  ngOnInit() {
    this.items = this.service.getSessions();
  }

  added() {
    this.ngOnInit();
  }
}
