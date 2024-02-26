import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import Typed from 'typed.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote-display',
  standalone: true,
  imports: [CommonModule],
  template: `<div #quoteContainer></div>`,
  styleUrls: ['./quote-display.component.scss'],
})
export class QuoteDisplayComponent implements AfterViewInit, OnDestroy {
  @ViewChild('quoteContainer') quoteContainer!: ElementRef;
  private typed!: Typed;

  constructor(private quoteService: QuoteService) {}

  ngAfterViewInit() {
    const options = {
      strings: [this.quoteService.getRandomQuote()],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 2000,
      onStart: (self: any) => {
        self.strings = [this.quoteService.getRandomQuote()];
      },
      preStringTyped: (arrayPos: any, self: any) => {
        self.strings = [this.quoteService.getRandomQuote()];
      },
    };

    this.typed = new Typed(this.quoteContainer.nativeElement, options);
  }

  ngOnDestroy() {
    if (this.typed) this.typed.destroy();
  }
}
