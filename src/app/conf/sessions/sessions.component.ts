import { Component, OnInit } from '@angular/core';
import {SessionService} from '../shared/services/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  displayedColumns = ['id', 'name', 'speaker', 'level', 'time'];
  constructor(private dataSource: SessionService) { }

  ngOnInit() {
  }
}
