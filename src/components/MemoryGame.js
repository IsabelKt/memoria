import React from "react";
import MemoryCard from "./MemoryCard";
import "./style.css";

const IMAGES = ["chocolate", "chocolate", "fruity", "fruity", "different", "different", "donuts", "donuts"];

// MISSING
// keep getting error Component not defined../
// after this I need to get the game to increase the counter by 1 everytime all cards are deleted from deck, and then create the next levels once count reaches 5, and 10, and have it grab a different array of images. Update the images to pass from a JSON file instead, and have the cards flip with css which is pseudocoded just unable to test in this newversion. 

class MemoryGame extends Component {
  constructor(props) {
    super(props);
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    this.state = {
      cards: shuffleArray(IMAGES.slice()),
      selected: [], // indexes which have been selected
      correct: [] // indexes which have been guessed correctly
    };
  }

  onCardClick(clickedIndex) {
    const { selected, cards, correct } = this.state;

    if (selected.length === 0) { // selecting a first card
      this.setState({ selected: [clickedIndex] })
    } else if (selected.length === 1) { // they're selecting a second card
      if (cards[selected[0]] === cards[clickedIndex]) {
    //    if it's a match
        // Add selected cards to `correct` and reset selection
        this.setState({
            correct: correct.concat([selected[0], clickedIndex]),
            selected: []
        });
      } else {
        // It's not a match :(
        // Select it for now, and reset selection in a bit
        this.setState({ selected: [selected[0], clickedIndex] });
        setTimeout(() => {
          this.setState({ selected: [] })
        }, 1500);
      }
    }
    // Otherwise they already have 2 selected and we don't wanna do anything
  }

  render() {
    const { correct, selected, cards } = this.state;
    return (
      <div>
        <h1>Memory Game</h1>
        <div className="mui-panel wrapper">
          {cards.map((image, i) => (
            <MemoryCard
              key={i}
              image={image}
              isCorrect={correct.includes(i)}
              isSelected={selected.includes(i)}
              onSelect={() => this.onCardClick(i)}
            />
          ))}
        </div>
      </div>
    );
  }
}


export default MemoryGame;