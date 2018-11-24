import React from "react";
import { Link } from "react-router-dom";

export default function GameScreen() {
  return (
    <div>
      <Link to="/">Wróć na stronę główną!</Link>
      <Link to="/">Osiągnięcia!</Link>
      <Link to="/">Ustawienia!</Link>
    </div>
  );
}
