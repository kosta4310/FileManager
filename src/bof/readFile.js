import {createReadStream} from 'node:fs';
import { Write } from './Write.js';

export async function readFile(path) {
    return new Promise((resolve, reject) => {
        const rs = createReadStream(path);
        const ws = new Write();
        rs.on('error', () => reject());
        rs.on('end', () => resolve());
        rs.pipe(ws);
    })  
}