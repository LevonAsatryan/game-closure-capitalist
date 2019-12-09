import {Images} from '../assets';
import {ShopType} from './interfaces/shop-metadata.interface';

export const Constants = {
    leftSide: {
        paddingLeft: 80,
        paddingTop: 80,
        width: 400,
        height: 1080,
        backgroundColor: 0xb1c3c9,
        tabButtons: {
            unlocks: {
                isComingSoon: true,
                buttonConfig: {
                    x: 80,
                    y: 300,
                    width: 250,
                    height: 80,
                    color: 0x35d474,
                },
                textConfig: {
                    text: 'Unlocks',
                    style: {
                        fill: '#ffffff',
                        stroke: '#000000',
                        strokeThickness: 1,
                        fontSize: 45,
                        fontWeight: 'bold'
                    }
                }
            },
            upgrades: {
                isComingSoon: true,
                buttonConfig: {
                    x: 80,
                    y: 400,
                    width: 250,
                    height: 80,
                    color: 0x35d474,
                },
                textConfig: {
                    text: 'Upgrades',
                    style: {
                        fill: '#ffffff',
                        stroke: '#000000',
                        strokeThickness: 1,
                        fontSize: 45,
                        fontWeight: 'bold'
                    }
                }
            },
            managers: {
                isComingSoon: false,
                buttonConfig: {
                    x: 80,
                    y: 500,
                    width: 250,
                    height: 80,
                    color: 0x35d474,
                },
                textConfig: {
                    text: 'Managers',
                    style: {
                        fill: '#ffffff',
                        stroke: '#000000',
                        strokeThickness: 1,
                        fontSize: 45,
                        fontWeight: 'bold'
                    }
                }
            },
            investors: {
                isComingSoon: true,
                buttonConfig: {
                    x: 80,
                    y: 600,
                    width: 250,
                    height: 80,
                    color: 0x35d474,
                },
                textConfig: {
                    text: 'Investors',
                    style: {
                        fill: '#ffffff',
                        stroke: '#000000',
                        strokeThickness: 1,
                        fontSize: 45,
                        fontWeight: 'bold'
                    }
                }
            }
        },
        userProfile: {
            avatar: Images.ImagesAvatar.getName(),
            outerBorderColor: 0x05bcff,
            innerBorderColor: 0x0565ff,
            borderThickness: 5,
            avatarWidth: 200,
            avatarHeight: 200
        }
    },
    mainContent: {
        balanceText: {
            x: 0,
            y: 0,
            text: '',
            style: {
                fill: '#ffffff',
                stroke: '#000000',
                strokeThickness: 1,
                fontSize: 45,
                fontWeight: 'bold'
            }
        },
        wrapper: {
            x: 500,
            y: 50
        },
        shopsMarginTop: 80,
        shopsGap: 200,
        shopMetrics: {
            assetAndButtonGap: 150,
            upgradeButton: {
                width: 300,
                height: 50,
                color: 0x35d474,
                textStyle: {
                    fill: 0xb4bfbe,
                    stroke: '#000000',
                    strokeThickness: 1,
                    fontSize: 27,
                    fontWeight: 'bold'
                }
            },
            timer: {
                x: 190,
                y: 30,
                style: {
                    fill: '#e4eaeb',
                    stroke: '#000000',
                    strokeThickness: 1,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            progressBar: {
                x: 200,
                y: 50,
                configs: {
                    radius: 50,
                    color: '#fff',
                    weight: 0.25,
                }
            }
        },
        shops: [
            {
                name: ShopType.HotDogStand,
                asset: Images.ImagesHotDog.getName(),
                initialEarning: 1,
                earningTime: 0.5,
                upgradeCost: 4,
                isUnlocked: true
            },
            {
                name: ShopType.Newspaper,
                asset: Images.ImagesNewspaper.getName(),
                initialEarning: 8,
                earningTime: 10,
                upgradeCost: 30,
                isUnlocked: false
            },
            {
                name: ShopType.FoodChain,
                asset: Images.ImagesFoodChain.getName(),
                initialEarning: 1000,
                earningTime: 130,
                upgradeCost: 8000,
                isUnlocked: false
            },
            {
                name: ShopType.OilCompany,
                asset: Images.ImagesOilCompany.getName(),
                initialEarning: 10000,
                earningTime: 500,
                upgradeCost: 22000,
                isUnlocked: false
            },
        ]
    },
    popups: {
        managers: {
            width: 1200,
            height: 900,
            color: 0xc9c9c9,
            title: {
                text: 'Managers',
                style: {
                    fill: '#ffffff',
                    fontSize: 60
                }
            }
        },
        hireMeButton: {
            buttonConfig: {
                x: 770,
                y: 25,
                width: 200,
                height: 100,
                color: 0x35d474,
            },
            textConfig: {
                text: 'Hire $',
                style: {
                    fill: '#ffffff',
                    stroke: '#000000',
                    strokeThickness: 1,
                    fontSize: 25,
                    fontWeight: 'bold'
                }
            }
        },
        managersConfigs: [
            {
                name: 'Hot Dog assistant',
                type: ShopType.HotDogStand,
                cost: 5000,
                asset: Images.ImagesHotDogsManager.getName(),
                width: 1000,
                height: 150,
                color: 0xffffff,
                textStyle: {
                    fill: '#000000',
                    fontSize: 45,
                    fontWeight: 'bold'
                }
            },
            {
                name: 'Newspaper accountant',
                type: ShopType.Newspaper,
                cost: 10000,
                asset: Images.ImagesNewspaperManager.getName(),
                width: 1000,
                height: 150,
                color: 0xffffff,
                textStyle: {
                    fill: '#000000',
                    fontSize: 45,
                    fontWeight: 'bold'
                },
            },
            {
                name: 'Food Chain Manager',
                type: ShopType.FoodChain,
                cost: 50000,
                asset: Images.ImagesFoodChainManager.getName(),
                width: 1000,
                height: 150,
                color: 0xffffff,
                textStyle: {
                    fill: '#000000',
                    fontSize: 45,
                    fontWeight: 'bold'
                },
            },
            {
                name: 'Food Chain Manager',
                type: ShopType.OilCompany,
                cost: 1000000,
                asset: Images.ImagesOilCompanyManager.getName(),
                width: 1000,
                height: 150,
                color: 0xffffff,
                textStyle: {
                    fill: '#000000',
                    fontSize: 45,
                    fontWeight: 'bold'
                },
            },
        ]
    }
};
