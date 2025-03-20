import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../types/language.type';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly apiUrl = 'http://localhost:5000/translate';

  constructor(private readonly http: HttpClient) {}

  translateText(
    text: string,
    targetLang: Language,
    sourceLang: Language | 'auto' = 'auto'
  ): Observable<any> {
    const body = {
      q: text,
      source: sourceLang,
      target: targetLang,
      format: 'text',
    };
    return this.http.post(this.apiUrl, body);
  }
}
