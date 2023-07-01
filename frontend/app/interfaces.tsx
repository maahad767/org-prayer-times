import {TimeLike} from "fs";

export interface Office {
  id: number;
  name: string;
}

export interface Floor {
  id: number;
  number: number;
  imam: string;
}

export interface Congregation {
  id: number;
  prayer: string;
  time: string;
}