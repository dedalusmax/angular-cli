# Angular 4 Crash Course (Angular CLI)

This session is aiming to demonstrate the ease of development of Angular 4 application from scratch.

Estimated time: 20 min.

### Preparation 
> open VS code. open angular-cli project. minimize the browser. open presentation.

## Step 1: getting the project ready

- open new instance of **Visual Studio Code**
- open *integrated terminal*
- only **explain** that CLI needs to be installed, other lines execute:

```bash
npm install -g @angular/cli
d:
ng new devarena --minimal --routing --style scss --skip-git -v
```

NOTE: installation usually takes approx. 1 min (for CLI) and 1 min and 20 sec (for new project) on a home wifi network.

> switch to the presentation slides (with a keen eye to the installation process!)

```bash
cd devarena
ng serve
```
- browse to the http://localhost:4200

> switch to the presentation slides and explain about Angular CLI

- open folder in VS code 
- explain the project structure and the configuration
- open **angular-cli.json** and change: *defaults/component/inlineStyle* to true, and *inlineTemplate* to true

### VARIATION A: including Angular Material

- terminate batch job

```bash
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations
ng serve
```

- add the import of material theme into **styles.scss**:
```css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

### VARIATION B: including Clarity Design

- terminate batch job

```bash
npm install @webcomponents/custom-elements@1.0.0 --save
npm install clarity-icons --save
npm install clarity-ui --save
npm install clarity-angular --save
```

- add the style into the **.angular-cli.json**:
```json
"../node_modules/clarity-ui/clarity-ui.min.css"
```

- start the app
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

### VARIANT A:

- add material module into the **conf.module.ts**:
```typescript
import { MatTabsModule } from '@angular/material';
```

### VARIANT B:

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
- add imports into **main-routing.component.ts** 
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

- add material module for table into the **conf.module.ts**:
```typescript
import { MatTableModule } from '@angular/material';
```

> copy HTML for **sessions.component.html** from the source project

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
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const sessions: Session[] = [
  {name: 'WEBRTC', speaker: 'Ratko Ćosić, Anabel Li Kečkeš', level: 300, time: '11:15 - 12:00'},
  {name: 'ANGULAR "CRASH COURSE"', speaker: 'Ratko Ćosić', level: 300, time: '16:15 - 16:35'},
  {name: 'MOJA PRVA IONIC 3 APLIKACIJA', speaker: 'Dario Vuljanić', level: 400, time: '16:40 - 17:00'}
];

@Injectable()
export class SessionService extends DataSource<any> {
  connect(): Observable<Session[]> {
    return Observable.of(sessions);
  }
  disconnect() {}
  add(session: Session) {
    sessions.push(session);
  }
}
```

- in **sessions.component.ts** import the service
- connect the data source via DI and enlist data columns:

```typescript
displayedColumns = ['name', 'speaker', 'level', 'time'];
constructor(private dataSource: SessionService) { }
```

## Step 4: component interaction

- add material modules for: card, button, input, select, formfield, into the **conf.module.ts**:
```typescript
MatCardModule, MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule
```

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

- add model into the new component: 

```typescript
import { Session } from '../shared/models/session';
private model = new Session();
```

> copy HTML for **new-session.component.html** from the source project

> copy CSS for **new-session.component.scss** from the source project

-- show the app
-- add event to the **new-session.component.ts**: 

```typescript
  @Output() added = new EventEmitter();
```

-- and connect with the event with a method in the **sessions.component.ts**:

```typescript
  newSession(session) {
    this.dataSource.add(session);
    this.dataSource = new SessionService();
  }
```

-- show the app and try to enter some data
