import {createReadStream, createWriteStream} from 'node:fs';
import {pipeline} from 'node:stream/promises';
import path from 'node:path';
import {createBrotliCompress, createBrotliDecompress} from 'node:zlib';

export async function compress(pathToFile, pathToDestination) {
    const nameFile = path.basename(pathToFile);
    const newPathToFile = path.join(pathToDestination, nameFile + '.br');
    try {
        const rs = createReadStream(pathToFile);
        const ws = createWriteStream(newPathToFile);
        const brotli = createBrotliCompress();
        await pipeline (
            rs,
            brotli,
            ws
        )
    } catch (error) {
        console.log('Operation failed');
    }
}

export async function decompress(pathToFile, pathToDestination) {
    const nameFile = path.basename(pathToFile);
    const newPathToFile = path.join(pathToDestination, nameFile.substring(0, nameFile.length - 3));
    
    try {
        const rs = createReadStream(pathToFile);
        const ws = createWriteStream(newPathToFile);
        const brotli = createBrotliDecompress();
        await pipeline (
            rs,
            brotli,
            ws
        )
    } catch (error) {
        console.log('Operation failed');
    }
}