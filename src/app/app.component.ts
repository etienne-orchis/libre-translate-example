import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="text" placeholder="Entrez du texte" />
    <button (click)="translate()">Traduire</button>
    @if(loading){
    <p>Traduction en cours ...</p>
    }@else {
    <p>Traduction en anglais: {{ translatedText }}</p>
    }
  `,
})
export class AppComponent {
  text = '';
  translatedText = '';
  loading: boolean | undefined = undefined;

  constructor(private readonly translationService: TranslationService) {}

  translate() {
    this.loading = true;
    this.translatedText = '';
    this.translationService.translateText(this.text, 'en').subscribe({
      next: (response) => {
        this.translatedText = response.translatedText;
        this.loading = false;
      },
      error: (e) => {
        this.loading = false;
        console.error(e);
      },
    });
  }
}
