import { Injectable } from '@nestjs/common';
import { PromoCode, PromoCodeParam } from './promo-code.interface';

@Injectable()
export class PromoCodeService {
  static instance;

  static getInstance() {
    if (PromoCodeService.instance) return PromoCodeService.instance;
    PromoCodeService.instance = new PromoCodeService;
    return PromoCodeService.instance;
  }

  generateRandomCode(length: number): string {
    let result              = '';
    const characters        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength  = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  generateCodes(params: PromoCodeParam): Array<PromoCode> {
    const result: Array<PromoCode> = [];
    for (let i = 0; i < params.count; i++) {
      result.push({
        id: i + 1,
        serviceName: this.generateRandomCode(7) + '.com',
        description: 'Some description',
        code: this.generateRandomCode(8),
        status: 'pending'
      } as PromoCode);
    }
    return result;
  }

}
