import os from 'node:os';
import path from 'node:path';
import { listDirectories } from './nwd/listDirectories.js';
export let currentDirectories = os.homedir();

export async function inputProcessing(inputRow) {
    const [cmd, arg1, arg2] = inputRow.split(' ');
    
    if (cmd && !arg1 && !arg2) {
        switch (cmd) {
            case 'up':
                currentDirectories = path.dirname(currentDirectories);
                break;
            case 'ls':
                await listDirectories(currentDirectories);
                break;

            default:
                console.log('Invalid input');
                break;
        }
    } else {
        console.log('Invalid input');
    }
    

    console.log(`You are currently in ${currentDirectories}`);
}