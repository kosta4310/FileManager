const { createHash } = await import('node:crypto');
import {pipeline} from 'node:stream/promises';
import {createReadStream} from 'node:fs';

export async function getHash(pathToFile) {
    try {
        const rs = createReadStream(pathToFile);
        const hash = createHash('sha256');
        hash.setEncoding('hex');
        
        rs.on('end', () => {
            hash.end();
            console.log(hash.read());
        })

        await pipeline(
            rs,
            hash
        )

        
    } catch (error) {
        console.log('Operation failed');
    }
    
}