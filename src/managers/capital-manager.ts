export class CapitalManager {
    public onBalanceUpdate: Phaser.Signal = new Phaser.Signal();
    balance: number = 0;

    private constructor() {
    }

    private static _instance: CapitalManager;

    public static get instance(): CapitalManager {
        if (!CapitalManager._instance) {
            CapitalManager._instance = new CapitalManager();
        }
        return CapitalManager._instance;
    }

    public reduceBalance(amount: number): void {
        this.balance -= amount;
        this.onBalanceUpdate.dispatch(this.balance);
    }

    public addToBalance(amount: number): void {
        this.balance += amount;
        this.onBalanceUpdate.dispatch(this.balance);
    }
}
