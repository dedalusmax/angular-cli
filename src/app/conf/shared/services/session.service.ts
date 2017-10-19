import { Injectable } from '@angular/core';
import { Session } from '../models/session';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const sessions: Session[] = [
  {id: 1, name: 'WEBRTC', speaker: 'Ratko Ćosić, Anabel Li Kečkeš', level: 300, time: '11:15 - 12:00'},
  {id: 2, name: 'ANGULAR "CRASH COURSE"', speaker: 'Ratko Ćosić', level: 300, time: '16:15 - 16:35'},
  {id: 3, name: 'MOJA PRVA IONIC 3 APLIKACIJA', speaker: 'Dario Vuljanić', level: 400, time: '16:40 - 17:00'}
];

@Injectable()
export class SessionService extends DataSource<any> {
  connect(): Observable<Session[]> {
    return Observable.of(sessions);
  }
  disconnect() {}
}
