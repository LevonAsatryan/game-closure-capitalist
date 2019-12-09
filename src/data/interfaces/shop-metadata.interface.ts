export interface IShopMetadata {
    name: ShopType;
    asset: string;
    initialEarning: number;
    earningTime: number;
    upgradeCost: number;
    isUnlocked: boolean;
}

export enum ShopType {
    HotDogStand,
    Newspaper,
    FoodChain,
    OilCompany
}
