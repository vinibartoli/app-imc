import { NgModule } from "@angular/core";
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';


@NgModule({
    exports: [
        InputNumberModule,
        InputMaskModule,
        ButtonModule,
        FieldsetModule,
        TableModule,
    ]
})

export class PrimeNGModule { }