import { ApiProperty } from '@nestjs/swagger'

export class PromoCodeDto {
  @ApiProperty({
    name: 'count',
    description: 'Promo codes count',
  })
  count: number
}
