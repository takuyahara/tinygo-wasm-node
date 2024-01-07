import { readFile } from "fs/promises";

const content = await readFile("./main.wasm");
await WebAssembly.compile(content)
    .then((module) => {
        const lib = new WebAssembly.Instance(module, {
            wasi_snapshot_preview1: {
                fd_write: () => { },
            },
        }).exports;
        console.log(lib.add_two_number(128, 128)); // 256
    })
    .catch((e) => {
        console.error(e);
    });