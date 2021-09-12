import React from "react";
import spinner from "../img/spinner.gif";
import CharacterItem from "./CharacterItem";

function CharacterGrid({ items, isLoading }) {
  return isLoading ? (
    <div className="center">
      <img src={spinner} alt=""></img>
    </div>
  ) : (
    <section className="cards">
      {items.map((item) => {
        return <CharacterItem key={item.char_id} item={item} />;
      })}
    </section>
  );
}
export default CharacterGrid;
