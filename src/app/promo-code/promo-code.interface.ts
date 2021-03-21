export interface PromoCode {
  id: number,
  serviceName: string,
  description: string,
  code: string,
  status?: string
}

export interface PromoCodeParam {
  count: number;
}