import blueFlowersUrl from "./blue-flowers.jpg";
import purpleFlowersUrl from "./purple-flowers.jpg";
import redFlowersUrl from "./red-flowers.jpg";
import whiteFlowersUrl from "./white-flowers.jpg";
import linesUrl from "./lines.jpg";

const BoardsBackgrounds = [
  blueFlowersUrl,
  purpleFlowersUrl,
  redFlowersUrl,
  whiteFlowersUrl,
  linesUrl,
];

export function randomBackgroundImage() {
  const randomBackground = Math.floor(Math.random() * BoardsBackgrounds.length);
  console.log(BoardsBackgrounds[randomBackground]);
  return BoardsBackgrounds[randomBackground];
}
