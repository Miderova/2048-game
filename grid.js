import {Cell} from "./cell.js";

const GRID_SIZE = 4;
const СELLS_COUNT = GRID_SIZE * GRID_SIZE;

export class Grid {
    constructor(gridElement){
        this.cell = [];
        for (let i = 0; i < СELLS_COUNT; i++) {
            this.cell.push(
                new this.cell(gridElement, i % GRID_SIZE, Math.floor(i / GRID_SIZE))
            );
            
        }
    }
}