export interface Offer {
    name: string;
    monthlyPrice: number;
    bonusAmount: number;
    bonusLegalReference: string;
    physicalPaymentLimit: number;
    virtualPaymentLimit: number;
    paymentLimitPeriodDays: number;
    withdrawalLimit: number;
    withdrawalLimitPeriodDays: number;
    cardMaterial: string;
    imageUrl: string;
  }