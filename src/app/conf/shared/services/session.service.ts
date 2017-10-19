import { Injectable } from '@angular/core';
import { Session } from '../models/session';

const sessions: Session[] = [
  {name: 'WebRTC', speaker: 'Ratko Ćosić, Anabel Li Kečkeš', level: 300, time: '11:15 - 12:00'},
  {name: 'Angular "Crash Course"', speaker: 'Ratko Ćosić', level: 300, time: '16:15 - 16:35'},
  {name: 'Moja prva Ionic 3 aplikacija', speaker: 'Dario Vuljanić', level: 400, time: '16:40 - 17:00'}
];

@Injectable()
export class SessionService {

  constructor() { }

  getSessions() {
    return sessions;
  }

  storeSession(session: Session) {
    sessions.push(session);
  }
}