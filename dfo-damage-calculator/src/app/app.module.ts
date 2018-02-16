import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//Pipes
import { ProperCasePipe } from './pipes/proper-case.pipe';
import { RoundNumberPipe } from './pipes/round-number.pipe';
import { SignedNumberPipe } from './pipes/signed-number.pipe';

//Components
import { EquipmentEditor } from './components/equipment-editor.component';
import { EquipmentLibrary } from './components/equipment-library.component';
import { WeaponDetails } from './components/weapon-details.component';
import { ArmorDetails } from './components/armor-details.component';

@NgModule({
  declarations: [
    ArmorDetails,
    EquipmentEditor,
    EquipmentLibrary,
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
  bootstrap: [EquipmentLibrary]
})
export class AppModule { }
