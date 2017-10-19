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

### including Angular Material

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

> copy HTML for **main.component.html** from the source project

- show the app
- add material module into the **conf.module.ts**:
```typescript
import { MatTabsModule } from '@angular/material';
```

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

> copy HTML for **sessions.component.html** from the source project
> copy HTML for **speakers.component.html** from the source project

