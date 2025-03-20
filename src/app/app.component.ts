import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="text" placeholder="Entrez du texte" />
    <button (click)="translate()">Traduire</button>
    <p>Traduction en anglais: {{ translatedText }}</p>
  `,
})
export class AppComponent {
  text = '';
  translatedText = '';

  constructor(private readonly translationService: TranslationService) {}

  translate() {
    this.translationService
      .translateText(this.text, 'en')
      .subscribe((response) => {
        this.translatedText = response.translatedText;
      });
  }
}
