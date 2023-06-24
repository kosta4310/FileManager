import {Writable} from 'node:stream';

export class Write extends Writable {
    constructor (opt) {
        super(opt);
    }

    _write (chunk) {
        process.stdout.write(chunk.toString());
    }
}