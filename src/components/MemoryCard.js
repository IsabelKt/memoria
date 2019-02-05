import React from "react";
import "./style.css";

const MemoryCard = ({ image, isSelected, isCorrect, onSelect }) => (
    <div
      className="modal mui-panel"
      onClick={() => {
        // You can only select a card that's not already correct and
        // isn't currently selected
        if (!isCorrect && !isSelected) {
          onSelect();
        }
      }}
    >
      <img
        style={{ visibility: (isCorrect || isSelected) ? 'visible' : 'hidden' }}
        src={"./" + image + ".png"}
        srcSet={"./" + image + "_lrg.jpg 1000w"}
        alt={image}
      />
    </div>
  );

  export default MemoryCard;
  