import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { TabsComponent }        from './tabs.component';
import { TabDirective }          from './tab.directive';
import { TabService }            from './tabs.service';


@NgModule({
  imports: [ BrowserModule ],
  providers: [TabService],
  declarations: [ AppComponent,
                  HeroJobAdComponent,
                  HeroProfileComponent,
                  TabsComponent,
                  TabDirective ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/