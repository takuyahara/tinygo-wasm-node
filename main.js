import "./wasm_exec.js"
import { readFile } from "fs/promises";

const content = await readFile("./main.wasm");
const go = new Go();
await WebAssembly.compile(content)
    .then((module) => {
        const { add } = new WebAssembly.Instance(module, go.importObject).exports;
        console.log(add(5, 6)); // Outputs: 11
    })
    .catch((e) => {
        console.error(e);
    });