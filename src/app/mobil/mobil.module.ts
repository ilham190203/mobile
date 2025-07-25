import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MobilPageRoutingModule } from './mobil-routing.module';

import { MobilPage } from './mobil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // <<< Tambahkan ini
    RouterModule.forChild([{ path: '', component: MobilPage }]),
  ],
})
export class MobilPageModule {}
