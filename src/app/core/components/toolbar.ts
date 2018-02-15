import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'toolbar',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="openMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <ng-content></ng-content>
    </mat-toolbar>
  `,
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
