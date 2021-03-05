import { ChangeTextDirective } from './change-text.directive';
import { ElementRef } from '@angular/core';

describe('ChangeTextDirective', () => {
  it('should create an instance', () => {
    // how to fix this
    const directive = new ChangeTextDirective();
    expect(directive).toBeTruthy();
  });
});
