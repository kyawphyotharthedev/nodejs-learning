// const fsPromises = require("fs").promises;
// const path = require("path");

// const fileOps = async () => {
//   try {
//     const data = await fsPromises.readFile(
//       path.join(__dirname, "files", "text.txt"),
//       "utf8"
//     );
//     console.log(data);
//     await fsPromises.unlink( path.join(__dirname, "files", "text.txt"));
//     await fsPromises.writeFile( path.join(__dirname, "files", "promiseWrite.txt"),data);
//     await fsPromises.appendFile( path.join(__dirname, "files", "promiseWrite.txt"),'\n\nHello,Hi 123');
//     await fsPromises.rename( path.join(__dirname, "files", "promiseWrite.txt"),  path.join(__dirname, "files", "promiseRename.txt"));
//     const newData = await fsPromises.readFile(
//       path.join(__dirname, "files", "promiseRename.txt"),
//       "utf8"
//     );
//     console.log(newData);
//   } catch (err) {
//     console.log(err);
//   }
// };
// fileOps();

// fs.readFile(path.join(__dirname, "files", "text.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile(path.join(__dirname, "files", "paragraph.txt"),"Nice to meet you.", (err) => {
//   if (err) throw err;
//   console.log("New file created successfully");

//   fs.appendFile(path.join(__dirname, "files", "paragraph.txt"), "\n\nNice to meet you too." , (err) => {
//     if (err) throw err;
//     console.log("Append file successfully");
//     fs.rename(path.join(__dirname, "files", "paragraph.txt"), path.join(__dirname, "files", "reply.txt"), (err) => {
//         if (err) throw err;
//         console.log("Rename file successfully");
//       });
//   });
// });

// process.on("uncaughtException", (err) => {
//   console.log(`There was an uncaught error:${err}`);
//   process.exit(1);
// });

// let path;
//   if (req.url === "/" || req.url === "index.html") {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     path = path.join(__dirname, "views", "index.html");
//     fs.readFile(path, "utf8", (err, data) => {
//       res.end(data);
//     });
//   }