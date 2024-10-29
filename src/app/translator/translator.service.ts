import { Injectable } from "@angular/core";

import * as i18n from '../../assets/i18n.json';

export const TRANSLATION_NOT_FOUND = 'Translation not found: $s';

@Injectable()
export class TranslatorService {

    public translate(key: string) : string {
        return this.getResolvedValue(key);
    }

    private getResolvedValue(key: string): string {
        return this.getLanguageMap()[key] ?? TRANSLATION_NOT_FOUND.replace("$s", key);
    }

    private getLanguageMap(): any  {
        return i18n[this.getLanguage() as keyof typeof i18n];
    }

    private getLanguage(): string {
        return localStorage.getItem('language') ?? 'en';
    }
}