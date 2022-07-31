import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hs-button',
  template: `
    <p>
      <button [style.color]='color'>{{label}}</button>
    </p>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

  @Input() color: string = '#000';
  @Input() label: string = 'Button';

  constructor() { }

  ngOnInit(): void {
  }

}
