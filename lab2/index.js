import { writeFile, readFile } from "fs/promises";

// await writeFile("stud.txt","Ravikant Singh/nRollNO:82");
// console.log("File Written");
// const data = await readFile("stud.txt", "utf-8");
// console.log(`file contents: ${data}`);

const addContent = async (fname, content) =>{
    await writeFile(fname,content);
    console.log(`${content} written in file: ${fname}`);

};

const readContent = async(fname) => {
    const data = await readFile(fname,"utf-8");
    return data;

};

await addContent("nodes.txt","FS is easy in JS");
console.log(await readContent("nodes.txt"));