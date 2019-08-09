import { Component, OnInit } from '@angular/core';
import { HeroJobAdComponent }   from './hero-job-ad.component';
import { TabService }         from './tabs.service';
import { TabItem }            from './tab-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-tabs [tabs]="tabs" [active]="active" (add)="onAdd()"></app-tabs>
    </div>
  `
})
export class AppComponent implements OnInit {
  tabs: TabItem[]
  active: Number = 1

  constructor(private tabService: TabService) {}

  ngOnInit() {
    this.tabs = this.tabService.getTabs()
  }

  onAdd() {
    const random = Math.floor(Math.random() * 20);
    console.log(random)
    this.tabs = [...this.tabs, new TabItem(random, `tab ${random}`, HeroJobAdComponent,   {headline: `Dynamic ${random} in all departments`, body: `Dynamic ${random}`})]
  }
}