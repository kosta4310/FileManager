import {rm} from 'node:fs/promises';

export async function deleteFile(pathToFile) {
    try {
        await rm(pathToFile);
    } catch (error) {
        console.log('Operation failed');
    }
}