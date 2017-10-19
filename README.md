# Angular 4 Crash Course (Angular CLI)

This session is aiming to demonstrate the ease of development of Angular 4 application from scratch.

Estimated time: 20 min.

### Preparation 
> open browser. open link to angular-cli repo in github. minimize the browser. open presentation.

## Step 1: getting the project ready (6 min)

- open **Visual Studio Code**
- open *integrated terminal*
- only **explain** that CLI needs to be installed, other lines execute:

```bash
npm install -g @angular/cli
d:
ng new live-chef1 --minimal --routing --style scss --skip-git -v
```

NOTE: installation usually takes approx. 1 min (for CLI) and 1 min and 20 sec (for new project) on a home wifi network.

> switch to the presentation slides (with a keen eye to the installation process!)

```bash
cd live-chef1
ng serve
```
- explain the effects of building the project
- browse to the http://localhost:4200

> switch to the presentation slides and explain about Angular CLI

- open folder in VS code 
- explain the project structure and the configuration
- open **angular-cli.json** and change: *defaults/component/inlineStyle* to true, and *inlineTemplate* to true
