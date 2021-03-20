export interface PromoCode {
  siteName: string,
  description: string,
  code: string,
  status?: string
}

export interface PromoCodeParam {
  count: number;
}