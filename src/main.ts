/*	
->>> import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

This line imports the platformBrowserDynamic function from the 
@angular/platform-browser-dynamic module. platformBrowserDynamic is responsible for 
dynamically bootstrapping an Angular application in a browser environment.

->>> import { AppModule } from './app/app.module';

This line imports the root module of the Angular application, typically named AppModule.
The root module (AppModule) is responsible for defining the structure of the application 
and configuring the components, services, and other modules.

->>> platformBrowserDynamic().bootstrapModule(AppModule)

The platformBrowserDynamic function is called to obtain a platform for dynamically 
bootstrapping the Angular application in a browser.
The bootstrapModule method is then called with the root module (AppModule) as an argument. 
This initiates the bootstrapping process for the Angular application.

->>> -.catch((err) => console.error(err));

The catch method is used to handle any errors that may occur during the bootstrapping 
process.
If there is an error during the application startup, it will be logged to the console.
In summary, the main.ts file initializes the Angular application by dynamically 
bootstrapping the AppModule. The root module contains the necessary configurations 
and dependencies to start the application. Any errors during the startup process are 
caught and logged to the console.
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
