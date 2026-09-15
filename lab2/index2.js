import {mkdir , rm} from "fs/promises";

// await mkdir("uploads");
// await mkdir("uploads/images");

//remove only data folder

// await mkdir ("docs/resumes/data",{recursive: true});

// await rm("docs/resumes/data",{recursive: true});
//removes main folder and sub folder alss
await rm("doc",{recursive: true});