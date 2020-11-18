import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxNgBanksComponent } from './ngx-ng-banks.component';

export const dropdownModuleForRoot: ModuleWithProviders<BsDropdownModule> = BsDropdownModule.forRoot();
export const tooltipModuleForRoot: ModuleWithProviders<TooltipModule> = TooltipModule.forRoot();

@NgModule({
  declarations: [NgxNgBanksComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    dropdownModuleForRoot,
    tooltipModuleForRoot,
  ],
  exports: [NgxNgBanksComponent],
})
export class NgxNgBanksModule {}
