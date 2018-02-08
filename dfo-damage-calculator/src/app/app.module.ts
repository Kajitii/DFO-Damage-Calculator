import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//Pipes
import { ProperCasePipe } from './pipes/proper-case.pipe';
import { RoundNumberPipe } from './pipes/round-number.pipe';
import { SignedNumberPipe } from './pipes/signed-number.pipe';

//Components
import { EquipmentEditor } from './components/equipment-editor.component';
import { EquipmentLabelInput } from './components/equipment-label-input.component';
import { WeaponDetails } from './components/weapon-details.component';

@NgModule({
  declarations: [
    EquipmentEditor,
    //EquipmentLabelInput,
    ProperCasePipe,
    RoundNumberPipe,
    SignedNumberPipe,
    WeaponDetails
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EquipmentEditor]
})
export class AppModule { }
