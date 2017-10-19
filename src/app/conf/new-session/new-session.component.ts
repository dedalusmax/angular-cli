import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Session } from '../shared/models/session';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.scss']
})
export class NewSessionComponent implements OnInit {

  @Output() added = new EventEmitter();
  private model = new Session();
  
  constructor() { }

  ngOnInit() {
  }

}
