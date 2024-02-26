// src/app/quote.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private quotes: string[] = [
    'Trust is the most advanced technology of all.',
    'Security is not a product, but a process.',
    'The best way to find out if you can trust somebody is to trust them.',
    'Innovation is change that unlocks new value.',
    'The future belongs to those who believe in the beauty of their dreams.',
    'Trust is the currency of the internet.',
    'In the world of technology, privacy is the new form of freedom.',
    'Data security is not just a technology issue, but a promise of reliability and commitment.',
  ];

  getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}
