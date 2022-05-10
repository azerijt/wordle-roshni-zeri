
interface MarkedLetter{
  letter:string;
  colour: 'AMBER'|'GREEN'|'GREY';
}


// LULLS => LEVELS 
// ([['L','GREEN'],['U','GREY'],['L', 'AMBER'], ['L', 'GREY'], ['S', 'GREY'] ]);
// FILLS => BOILY

// PSEUDOCODE
//  ITERATE THROUGH STRING
// IF NOT IN THE STRING COLOUR = GREY
//  IF IS IN IT, CHECK INDEX, IF SAME GREEN, ELSE AMBER
// ONCE CHECKED REMOVE FROM TEMP ARRAY


function makeWordleGuess(guess: string, hiddenTarget: string): MarkedLetter[]{
  let hiddenCopy = hiddenTarget.toUpperCase().split('')
  let guessCopy = guess.toUpperCase().split('');
  let guessArrayMarked = [];
  for (let letter of guessCopy){
    if(hiddenCopy.indexOf(letter)===-1){
      const marking =  'GREY';
      const pair: MarkedLetter = {letter: letter, colour:marking}
      guessArrayMarked.push(pair)
    }
    else{
      if(hiddenCopy.indexOf(letter)=== guessCopy.indexOf(letter)){
        const marking = 'GREEN';
        const pair: MarkedLetter = {letter: letter, colour:marking}
        guessArrayMarked.push(pair)
        hiddenCopy.splice(hiddenCopy.indexOf(letter), 1, '')
        console.log('spliced', hiddenCopy)
      }
      else{
        const marking='AMBER';
        const pair: MarkedLetter = {letter: letter, colour:marking}
        guessArrayMarked.push(pair)
        hiddenCopy.splice(hiddenCopy.indexOf(letter), 1, '')
      }
    }
  }
  return guessArrayMarked;
}


export default makeWordleGuess;
