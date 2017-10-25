# Angular 4 Crash Course (Angular CLI)

This session is aiming to demonstrate the ease of development of Angular 4 application from scratch.

Estimated time: 20 min.

### Preparation 
> open VS code. open angular-cli project. (no presentation slides!)

## Step 1: getting the project ready

- open new instance of **Visual Studio Code**
- open *integrated terminal*
- only **explain** that CLI needs to be installed, execute:

```bash
d:
npm install @angular/cli -g
ng new devarena --minimal --routing --style scss --skip-git -v
```

NOTE: installation usually takes approx. 1 min (for CLI) and 1 min and 20 sec (for new project) on a home wifi network.

> switch to the presentation slides (with a keen eye to the installation process!)

```bash
cd devarena
ng serve
```
- browse to the http://localhost:4200
- split screens with WIN + LEFT

- open folder in VS code 
- explain the project structure and the configuration
- open **angular-cli.json** and change: *defaults/component/inlineStyle* to true, and *inlineTemplate* to true

### including Clarity Design

- terminate batch job

```bash
npm install @webcomponents/custom-elements@1.0.0 clarity-icons clarity-ui clarity-angular
```

- add the style into the **.angular-cli.json**:
```json
"../node_modules/clarity-ui/clarity-ui.min.css"
```

- serve the app
```bash
ng serve
```

## Step 2: creating project structure

- open **app.component.ts** and remove all the lines in inline template except for *router-outlet*
- show the app
- open another terminal window:

```bash
ng g module conf --routing -m app
ng g component conf/main
```

- open **app-routing.module.ts** and add the route: 
```typescript
{ path: '', redirectTo: '/conf', pathMatch: 'full' }
```
- open **conf.module.ts** and copy the import for MainComponent  
- open **conf-routing.module.ts**, paste the import, and add the route: 
```typescript
{ path: 'conf', component: MainComponent }
```

- add clarity module into the **conf.module.ts**:
```typescript
import { ClarityModule } from "clarity-angular";
ClarityModule.forRoot()    
```

> copy HTML for **main.component.html** from the source project

```bash
<header class="header header-2">
  <div class="branding">
    <a href="#" class="nav-link">
      <span class="title">Ekobit DevArena</span>
    </a>
  </div>
  <div class="header-nav">
    <a href="#" [routerLink]="['sessions']" routerLinkActive="active" class="active nav-link nav-text">Sessions</a>
    <a href="#" [routerLink]="['speakers']" routerLinkActive="active" class="nav-link nav-text">Speakers</a>
  </div>
</header>
<router-outlet></router-outlet>
```

- show the app
- create new components for sessions and speakers:

```bash
ng g component conf/sessions -m conf
ng g component conf/speakers -m conf
```

- copy two imports for these components from **main.component.ts**
- add child routes so that the routes look like this:
```typescript
  { path: 'conf', component: MainComponent, children: [
      { path: 'sessions', component: SessionsComponent },
      { path: 'speakers', component: SpeakersComponent }
    ]
  }
```

-show the app

## Step 3: connecting and displaying data

> copy HTML for **sessions.component.html** from the source project

```html
<clr-datagrid *ngIf="items">
  <clr-dg-column>Name</clr-dg-column>
  <clr-dg-column>Speaker</clr-dg-column>
  <clr-dg-column>Level</clr-dg-column>
  <clr-dg-column>Time</clr-dg-column>

  <clr-dg-row *ngFor="let item of items">
      <clr-dg-cell>{{item.name}}</clr-dg-cell>
      <clr-dg-cell>{{item.speaker}}</clr-dg-cell>
      <clr-dg-cell>{{item.level}}</clr-dg-cell>
      <clr-dg-cell>{{item.time}}</clr-dg-cell>
  </clr-dg-row>

  <clr-dg-footer>{{items.length}} sessions</clr-dg-footer>
</clr-datagrid>
```

- create a model and a service for sessions:
```bash
ng g class conf/shared/models/session
ng g service conf/shared/services/session -m conf
```

- add properties into the model:

```typescript
  name: string;
  speaker: string;
  level: number;
  time: string;
```

> copy the code from the source project for the **session.service.ts**:

```typescript
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
```

- in **sessions.component.ts** import the service
- connect with DI and call the getSessions method

```typescript
items = [];
constructor(private service: SessionService) { }
ngOnInit() {
  this.items = this.service.getSessions();
}
```

## Step 4: component interaction

- add new component for new session:

```bash
ng g component conf/new-session
```

- add reference to the new component inside **sessions.component.html**:
```html
<app-new-session (added)="newSession($event)"></app-new-session>
```

- add animations module into **app.module.ts**:

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
```

- add forms module into **conf.module.ts**:

```typescript
import { FormsModule } from '@angular/forms';
```

> copy HTML for **new-session.component.html** from the source project

-- add event, model and levels to the **new-session.component.ts**: 

```typescript
  levels = [100, 200, 300, 400];
  @Output() added = new EventEmitter();
  private model = new Session();
```
- add DI for the service and save method:

```typescript
  save() {
    this.service.storeSession(this.model);
    this.added.emit();
  }
```

- and connect with the event with a method in the **sessions.component.ts**:

```typescript
  added() {
    this.ngOnInit();
  }
```

-- show the app and try to enter some data
