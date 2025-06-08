import { Injectable, signal } from '@angular/core';

export type AvaiableLocale = 'es' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocal = signal<AvaiableLocale>('es');

  constructor() {
    this.currentLocal.set(
      (localStorage.getItem('locale') as AvaiableLocale) ?? 'es'
    );
  }

  get getLocale() {
    return this.currentLocal();
  }

  changeLocale(locale: AvaiableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocal.set(locale);
    window.location.reload();
  }
}
