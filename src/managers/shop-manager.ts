import {CapitalManager} from './capital-manager';

export class ShopManager {
    public incomeAmount: number;

    constructor(
        public upgradeCost: number,
        private initialIncome: number) {
        this.incomeAmount = initialIncome;
    }

    public generateIncome(): void {
        CapitalManager.instance.addToBalance(this.incomeAmount);
    }

    public upgradeShop(): void {
        CapitalManager.instance.reduceBalance(this.upgradeCost);
        this.upgradeCost += this.upgradeCost * 0.02;
        this.incomeAmount += this.initialIncome;
    }
}
