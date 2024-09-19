import { Injectable } from '@angular/core';
import {PhoneNumberUtil, PhoneNumberFormat, PhoneNumber, AsYouTypeFormatter} from 'google-libphonenumber';




@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {
  private phoneUtil = PhoneNumberUtil.getInstance();



  validatePhoneNumber(phoneNumber: string, countryCode: string): boolean {
    const phoneUtil = PhoneNumberUtil.getInstance();
    const countryCodeIso = phoneUtil.getRegionCodeForCountryCode(parseInt(countryCode));

    try {
      const numberProto = phoneUtil.parse(phoneNumber, countryCodeIso);
      return phoneUtil.isValidNumber(numberProto);

    } catch (error) {
      return false;
    }
  }


  getAllCountryCodes(): { countryCode: string, dialCode: string }[] {
    const supportedRegions = this.phoneUtil.getSupportedRegions();
    const excludedRegions = ['EH'];
    const countryCodes = supportedRegions
      .filter(region => !excludedRegions.includes(region))
      .map(region => {
        const countryCode = this.phoneUtil.getCountryCodeForRegion(region);
        return { countryCode: region, dialCode: `+${countryCode}` };
      });
    return countryCodes;
  }



  constructor() {

  }
}

