import { BoardsBackgrounds } from "@/entities/board/lib/BoardsBackgrounds";

export function randomBackgroundImage() {
  const randomBackground = Math.floor(Math.random() * BoardsBackgrounds.length);
  console.log(BoardsBackgrounds[randomBackground]);
  return BoardsBackgrounds[randomBackground];
}
