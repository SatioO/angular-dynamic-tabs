import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ComponentFactoryResolver, } from '@angular/core';
import { TabItem }               from './tab-item';
import { TabComponent } from './tab.component';
import { TabDirective } from './tab.directive';

@Component({
  selector: 'app-tabs',
  template: `
    <div style="display: flex; flex-direction:row; justify-content: center;">
        <button (click)="onAdd()">Add new</button>
        <div *ngFor="let tab of tabs; let i = index">
          <button [ngStyle]="{'background-color': active === i ? 'green': '#FFF', border: '1px solid #333'}" (click)="onTabClick(tab, i)">{{tab.title}}</button>
        </div>
    </div>
    <div style="margin-top: 20px;">
    <ng-template tab-host></ng-template>
    </div>
  `
})
export class TabsComponent {
  @Input() tabs: TabItem[] = []
  @Input() active = 0
  @Output() add = new EventEmitter();
  @ViewChild(TabDirective, {static: true}) adHost: TabDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this._loadComponent(this.tabs[this.active])
  }

  onAdd(){
    this.add.emit()
  }

  onTabClick(tab, index) {
    this.active = index
    this._loadComponent(tab)
  }

  private _loadComponent(tab) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tab.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TabComponent>componentRef.instance).data = tab.data;
  }
}