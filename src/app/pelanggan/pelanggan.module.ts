import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PelangganPageRoutingModule } from './pelanggan-routing.module';

import { PelangganPage } from './pelanggan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: PelangganPage }]),
  ],
})
export class PelangganPageModule {}
