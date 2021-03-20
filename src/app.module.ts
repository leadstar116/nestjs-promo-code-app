import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule, Routes } from 'nest-router'
import { PromoCodeModule } from './app/promo-code/promo-code.module';

const routes: Routes = [
  {
    path: '/',
    children: [
      {
        path: '/promo-code',
        module: PromoCodeModule
      }
    ]
  }
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ConfigModule.forRoot(),
    PromoCodeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
