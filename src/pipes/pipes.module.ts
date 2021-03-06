import { NgModule } from '@angular/core';

import { FormatTimePipe } from './format-time';
import { FormatMonthPipe } from './format-month-pipe';
import { FormatDayOfWeekPipe } from './format-day-of-week-pipe';
import { AddressName } from './address-name';

@NgModule({
  declarations: [
    FormatTimePipe,
    FormatMonthPipe,
    FormatDayOfWeekPipe,
    AddressName
  ],
  imports: [

  ],
  exports: [
    FormatTimePipe,
    FormatMonthPipe,
    FormatDayOfWeekPipe,
    AddressName
  ]
  ,
})
export class PipesModule {}