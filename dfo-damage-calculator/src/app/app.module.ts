import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Pipes
import { ProperCasePipe } from './pipes/proper-case.pipe';
import { RoundNumberPipe } from './pipes/round-number.pipe';
import { SignedNumberPipe } from './pipes/signed-number.pipe';

// Main Components
import { AppRootComponent } from './components/app.component';
import { EquipmentPaneComponent } from './components/equipment-pane/equipment-pane.component';

// Equipment Pane Components
import { EquipmentEditor } from './components/equipment-pane/equipment-editor.component';
import { EquipmentLibrary } from './components/equipment-pane/equipment-library.component';
import { EquipmentLoadout } from './components/equipment-pane/equipment-loadout.component';

// Equipment Preview Components
import { WeaponDetails } from './components/equipment-preview/weapon-details.component';
import { ArmorDetails } from './components/equipment-preview/armor-details.component';
import { AccessoryDetails } from './components/equipment-preview/accessory-details.component';
import { SpecialAccessoryDetails } from './components/equipment-preview/special-accessory-details.component';
import { EquipmentDetailsTitle } from './components/equipment-preview/equipment-details-title.component';
import { EquipmentDetailsSummary } from './components/equipment-preview/equipment-details-summary.component';
import { EquipmentDetailsPrimary } from './components/equipment-preview/equipment-details-primary.component';
import { EquipmentDetailsExorcism } from './components/equipment-preview/equipment-details-exorcism.component';
import { EquipmentDetailsMiscellaneous } from './components/equipment-preview/equipment-details-miscellaneous.component';
import { EquipmentDetailsDescription } from './components/equipment-preview/equipment-details-description.component';
import { EquipmentDetailsMorph } from './components/equipment-preview/equipment-details-morph.component';
import { EquipmentDetailsVendor } from './components/equipment-preview/equipment-details-vendor.component';

@NgModule({
  declarations: [
    AccessoryDetails,
    AppRootComponent,
    ArmorDetails,
    EquipmentDetailsDescription,
    EquipmentDetailsExorcism,
    EquipmentDetailsMiscellaneous,
    EquipmentDetailsPrimary,
    EquipmentDetailsMorph,
    EquipmentDetailsSummary,
    EquipmentDetailsTitle,
    EquipmentDetailsVendor,
    EquipmentPaneComponent,
    EquipmentEditor,
    EquipmentLibrary,
    EquipmentLoadout,
    ProperCasePipe,
    RoundNumberPipe,
    SignedNumberPipe,
    SpecialAccessoryDetails,
    WeaponDetails
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
