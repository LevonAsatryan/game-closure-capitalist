Initial project was forked from https://github.com/rroylance/phaser-ce-npm-webpack-typescript-starter-project

**ABOUT THE PROJECT**

This project was built as a coding challenge given from Game Closure to make a minimal version of the game "Adventure Capitalist".
Even though the project is not yet in it's final form, it has the most essential parts of the game: Buying businesses, working on them and hiring managers to work on the business when idle.
The game will **NOT** save it's state when the user leaves. Even though the principle of saving the state is not that hard, I couldn't implement it due to time required to do it as I already work full-time.
However, if I was to implement it, I would save the game state in the local storage of the browser and would not use a back-end. The game is a single-player game, without registration and any kind of interaction that requires back-end to be present. The state of the game could been saved on each interaction when user spends money on buying: the time would be logged, so when the user comes back it will be possible to calculate how much money would the managers make.
You can see in the project that I made workarounds in the assets department. I do have the knowledge of asset optimization (creating spritesheets, resizing, etc.), however I didn't have the tools to make those changes, and since I'm working on windows (god damn it microsoft), I couldn't really resize the images to my desire.
I'm experienced in using TexturePacker and Adobe Photoshop for optimizing the assets (a little bit of Adobe Illustrator).

Most of the project configurations can be found in constants.ts file (/src/data/constants.ts), you can tweak the configuration to your desire.

**SETUP**

1. download or clone the repository from https://github.com/LevonAsatryan/game-closure-capitalist.git
navigate to the workspace directory
run: `git clone https://github.com/LevonAsatryan/game-closure-capitalist.git`
2. Install nodejs stable version by following instructions on https://nodejs.org/en/
3. Install dependencies by running `npm install`
4. To run local development server run `npm run server:dev`, for dist server run `npm run server:dist`
5. To build project, run `npm run build:dev` or `npm run build:dist`.

**HOW TO PLAY**

The game begins with 0 budget and non-upgraded hot-dog stand, that the player can click on to earn money. After .5 seconds (for hot-dog stand), the user will make $1. After collecting enough money, the user can update the hot-dog stand to make even more money from each click.
When enough money is collected, the user can buy another businesses like Newspaper delivery. The more expensive the structure is, the more time it needs to generate income, however the income is getting higher as well.
The user can hire manager by clicking on Managers button, and clicking on the manager that he desires. The manager will automate the income generation process, however they're not cheap (dah).


     

