import {readdir} from 'node:fs/promises';

export async function listDirectories(path) {
    const dirent = await readdir(path, {withFileTypes: true});
    const array = dirent.map(dirent => {
        return {
            Name: dirent.name,
            Type: dirent.isFile() ? 'file' : 'directory'
        }
    });
    array.sort(compare);
    function compare(a, b) {
        if (a.Type > b.Type) {
            return 1;
        } else if (a.Type < b.Type) {
            return -1;
        } else return 1;
    }
    console.table(array);
}