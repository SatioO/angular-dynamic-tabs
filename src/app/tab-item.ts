import { Type } from '@angular/core';

export class TabItem {
  constructor(public id: Number, public title: String, public component: Type<any>, public data: any) {}
}