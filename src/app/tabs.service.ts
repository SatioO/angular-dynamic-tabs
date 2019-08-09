import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { TabItem }               from './tab-item';

@Injectable()
export class TabService {
  getTabs() {
    return [
      new TabItem(1, "Bombasto", HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new TabItem(2, "Dr IQ",HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new TabItem(3, "Hiring",HeroJobAdComponent,   {headline: 'Hiring for several positions', body: 'Submit your resume today!'}),

      new TabItem(4, "Openings", HeroJobAdComponent,   {headline: 'Openings in all departments', body: 'Apply today'}),
    ];
  }
}
