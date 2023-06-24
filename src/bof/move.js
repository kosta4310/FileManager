import { copy } from "./copy.js";
import {rm} from 'node:fs/promises';

export async function move(pathToFile, pathToNewDirectory) {
    
    try {
        await copy(pathToFile, pathToNewDirectory);
        await rm(pathToFile);
    } catch (error) {
        console.log('Operation failed');
    }
}