
import path from 'node:path';
import { listDirectories } from './nwd/listDirectories.js';
import { changeDirectory } from './nwd/changeDirectory.js';
import { readFile } from './bof/readFile.js';
import { createFile } from './bof/createFile.js';
import { renameFile } from './bof/rename.js';

export async function inputProcessing(inputRow) {
    const [cmd, arg1, arg2] = inputRow.split(' ');
    
    if (cmd && !arg1 && !arg2) {
        switch (cmd) {
            case 'up':
                process.chdir(path.dirname(process.cwd()));
                break;
            case 'ls':
                await listDirectories(process.cwd());
                break;

            default:
                console.log('Invalid input');
                break;
        }
    } else if (cmd && arg1 && !arg2) {
        switch (cmd) {
            case 'cd':
                changeDirectory(arg1);
                break;
            case 'cat':
                await readFile(arg1)
                .catch(() => console.log('Operation failed'));
                break;
            case 'add':
                await createFile(arg1);
                break;
            default:
                console.log('Invalid input');
                break;
        }
    } else if (cmd && arg1 && arg2) {
        switch (cmd) {
            case 'rn':
                await renameFile(arg1, arg2);
                break;
        
            default:
                console.log('Invalid input');
                break;
        }
    } else console.log('Invalid input');
    
    

    console.log(`You are currently in ${process.cwd()}`);
}