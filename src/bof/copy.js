import {createReadStream, createWriteStream} from 'node:fs';
import {pipeline} from 'node:stream/promises';
import path from 'node:path';

export async function copy(pathToFile, pathToNewDirectory) {
    const pathToNewFile = path.join(pathToNewDirectory, path.basename(pathToFile));
    const rs = createReadStream(pathToFile);
    const ws = createWriteStream(pathToNewFile);
    await pipeline(
        rs,
        ws
    )
}

export async function copyFile(pathToFile, pathToNewDirectory) {
    try {
        await copy(pathToFile, pathToNewDirectory);
    } catch (error) {
        console.log('Operation failed');
    }
}