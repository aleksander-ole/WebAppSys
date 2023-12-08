import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) //nimmt das Root-Modul entgegen & Angular rendert die Root-Component
  .catch(err => console.error(err));
