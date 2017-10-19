import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Session } from '../shared/models/session';
import { SessionService } from '../shared/services/session.service';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.scss']
})
export class NewSessionComponent implements OnInit {

  levels = [100, 200, 300, 400];
  @Output() added = new EventEmitter();
  private model = new Session();
  
  constructor(private service: SessionService) { }

  ngOnInit() {
  }

  save() {
    this.service.storeSession(this.model);
    this.added.emit();
  }
}
