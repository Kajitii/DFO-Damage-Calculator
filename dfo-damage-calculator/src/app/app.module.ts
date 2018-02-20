import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Pipes
import { ProperCasePipe } from './pipes/proper-case.pipe';
import { RoundNumberPipe } from './pipes/round-number.pipe';
import { SignedNumberPipe } from './pipes/signed-number.pipe';

// Components
import { EquipmentEditor } from './components/equipment-editor.component';
import { EquipmentLibrary } from './components/equipment-library.component';

// Equipment Preview
import { WeaponDetails } from './components/equipment-preview/weapon-details.component';
import { ArmorDetails } from './components/equipment-preview/armor-details.component';
import { EquipmentDetailsTitle } from './components/equipment-preview/equipment-details-title.component';
import { EquipmentDetailsSummary } from './components/equipment-preview/equipment-details-summary.component';
import { EquipmentDetailsPrimary } from './components/equipment-preview/equipment-details-primary.component';
import { EquipmentDetailsMiscellaneous } from './components/equipment-preview/equipment-details-miscellaneous.component';
import { EquipmentDetailsDescription } from './components/equipment-preview/equipment-details-Description.component';
import { EquipmentDetailsMorph } from './components/equipment-preview/equipment-details-morph.component';
import { EquipmentDetailsVendor } from './components/equipment-preview/equipment-details-vendor.component';

@NgModule({
  declarations: [
    ArmorDetails,
    EquipmentDetailsDescription,
    EquipmentDetailsMiscellaneous,
    EquipmentDetailsPrimary,
    EquipmentDetailsMorph,
    EquipmentDetailsSummary,
    EquipmentDetailsTitle,
    EquipmentDetailsVendor,
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
