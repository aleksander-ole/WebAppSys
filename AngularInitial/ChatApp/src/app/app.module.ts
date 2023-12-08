import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [//Inhalt des Moduls 
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ //registrieren von Services, die Logik für Komponente enthalten
    provideClientHydration()
  ],
  bootstrap: [AppComponent] //alle Komponente, die beim Start erstellt werden sollen
})
export class AppModule { }
