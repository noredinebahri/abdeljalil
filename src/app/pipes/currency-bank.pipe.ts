import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBank'
})
export class CurrencyBankPipe implements PipeTransform {

  transform(value: number | string, currencySymbol: string = '', symbolPosition: 'before' | 'after' = 'before', decimalPlaces: number = 2): string {
    if (isNaN(Number(value))) {
      return value.toString();
    }

    // Format the number with the specified number of decimal places
    let formattedValue = (Number(value).toFixed(decimalPlaces));

    // Add thousands separator
    // formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    // Position the currency symbol
    if (symbolPosition === 'before') {
      return `${currencySymbol}${formattedValue}`;
    } else {
      return `${formattedValue} ${currencySymbol}`;
    }
  }
}
