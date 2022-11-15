import { NgModule } from "@angular/core";
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
    exports: [
        InputNumberModule,
        InputMaskModule,
        ButtonModule,
        FieldsetModule,
        TableModule,
        InputTextModule
    ]
})

export class PrimeNGModule { }