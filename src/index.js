import { inputProcessing } from "./inputProcessing.js";
import { currentDirectories } from "./inputProcessing.js";

const [argument] = process.argv.slice(2);
let username;
if (argument) {
    [username] = argument.split('=').slice(-1);
} else username = 'Anonimus';

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${currentDirectories}`);

function  endOfProgramm() {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
}

process.stdin.on('data', (inputRow) => {
    const data = inputRow.toString().trim();
    if (data === '.exit') {
        endOfProgramm();
    }
    inputProcessing(data);
});

process.on('SIGINT', () => {
    endOfProgramm();
});