import { Controller, Post, HttpStatus, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { PromoCodeService } from './promo-code.service';
import { PromoCodeDto } from './promo-code.dto';
import { PromoCode } from './promo-code.interface';

@ApiTags('PromoCode')
@Controller()
export class PromoCodeController {
  private promoCodeService: PromoCodeService = PromoCodeService.getInstance();

  @Post()
  @ApiOperation({ description: 'Get promo codes' })
  public async get(@Body() params: PromoCodeDto, @Res() res: Response) {
    try {
      const result: Array<PromoCode> = this.promoCodeService.generateCodes(params);
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error.message);
    }
  }
}
