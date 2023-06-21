import {writeFile} from 'node:fs/promises';
import path from 'node:path';


export async function createFile(nameFile) {
    const pathFile = path.resolve(process.cwd(), nameFile);
    try {
        await writeFile(pathFile, '', {flag: 'wx'});
    } catch (error) {
        console.log('Operation failed');
    } 

}