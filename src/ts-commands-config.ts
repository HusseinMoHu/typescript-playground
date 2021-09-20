/* ----------------------------- 1-TypeScript commands -----------------------------  */

// $ tsc app.ts                                   /* compile single ts file */

// $ tsc app.js --watch                           /* watch single file */
// $ tsc app.js -w                                /* watch single file */

// $ tsc --init                                   /* init ts project -> create tsconfig.json */

// $ tsc           // after $ tsc --init          /* compile all ts files in the ts-project not only single file */

// $ tsc --watch                                  /* watch all ts files in the project */
// $ tsc --w                                      /* watch all ts files in the project */

/* ----------------------------- 2-TypeScript configurations -> tsconfig.json ----------------------------- */
/* ----------- 2-1-exclude and include ----------- */

// exclude: []                                   /* ts-files to exclude form compilation */
// exclude: ["node_modules"]                     /* the default value for exclude */
// exclude: ["*.dev.ts"]                         /* exclude any file that ends with .dev.ts */
// exclude: ["**/*.dev.ts"]                      /* exclude any file that a inside-folder && ends with .dev.ts */

// include: []                                   /* to compile a specific files */
// include: ["app.js", "generate.ts"]            /* to compile a specific files */

// Note: we compile {include - exclude}          /* that mean any file mentioned in include and exclude -> WILL exclude */

/* ----------- 2-2-compilerOptions ----------- */
// target: "ES6"                                            /* compile ts to js-es6 */
// lib : ["dom", "ES6", "dom.iterable", "scripthost"]       /* lib default values */
// sourceMap : true                                         /* show ts-files in browser for easy-debugging  */
// outDir: "./dist"                                         /* ts compilation output  */
// rootDir : "./src"                                        /* path to ts-files you want to compile them to /dist */
// removeComments : true,                                   /* Disable emitting comments. */
// noEmit : true,                                           /* just check ts-files. don't compile them to js-files */
// noEmitOnError : true                                     /* stop compilation if there is an error */
// noImplicitThis : true,                                   /* ts ensure you use this-keyword right */
// alwaysStrict : true                                      /* Emit "user strict" in js-files */
