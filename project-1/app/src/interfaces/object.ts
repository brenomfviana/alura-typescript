import { Printable } from "./printable.js";
import { Comparable } from "./comparable-interface.js";

export interface Object<T> extends Printable, Comparable<T> {}
