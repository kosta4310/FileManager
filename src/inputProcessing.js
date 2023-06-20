
import path from 'node:path';
import { listDirectories } from './nwd/listDirectories.js';
import { changeDirectory } from './nwd/changeDirectory.js';

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
        
            default:
                console.log('Invalid input');
                break;
        }
    } else console.log('Invalid input');
    

    console.log(`You are currently in ${process.cwd()}`);
}