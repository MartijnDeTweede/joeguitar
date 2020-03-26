import { Slide } from "../Types/Slide";
import aNewNote from './ANewNote.png';

import firstNote from './FirstNote.png';
import gAndA from './GandA.png';

export const testslides: Slide [] = [
  {
    imagesource: firstNote,
    alt: "my first note",
    onclick: () => window.location.assign('https://www.patreon.com/posts/34657647'),
  },
  {
    imagesource: aNewNote,
    alt: "a new note",
    onclick: () => window.location.assign('https://www.patreon.com/posts/34952518'),
  },
  {
    imagesource: gAndA,
    alt: "G and A together they play",
    onclick: () => window.location.assign('https://www.patreon.com/posts/34526007'),
  },
]