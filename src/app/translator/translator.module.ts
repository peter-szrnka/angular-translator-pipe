import { NgModule } from "@angular/core";
import { TranslatorPipe } from "./translator.pipe";
import { TranslatorService } from "./translator.service";

@NgModule({
    declarations: [
        TranslatorPipe
    ],
    providers: [
        TranslatorService
    ],
    exports: [
        TranslatorPipe
    ],
    imports: [
    ]
})
export class TranslatorModule { }