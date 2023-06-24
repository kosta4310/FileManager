import {rename} from 'node:fs/promises';
import path from 'node:path';

export async function renameFile(pathToFile, newFileName) {
    const pathToDirecory = path.dirname(pathToFile);
    const newPath = path.join(pathToDirecory, newFileName);

    try {
        await rename(pathToFile, newPath);
    } catch (error) {
        console.log('Operation failed');
    }
}