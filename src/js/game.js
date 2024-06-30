import Character from './domain'
const character = new Character("Ivan")
console.log(character.name)

class Game {
    start() {
      console.log('game started');
    }
  }

  export default Game;
  
  export class GameSavingData {
  }

  
 export function readGameSaving() {
  }
  
export function writeGameSaving() {
  }

  