export function changeDirectory(path) {
    try {
        process.chdir(path);
    } catch (error) {
        console.log('Operation failed');
    }
}