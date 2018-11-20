# nativescript-resolve-json
Importing JSON files in NativeScript via the TypeScript's (2.9.x and above) `resolveJsonModule` property.


Requrments:
- TypeScript version 2.9.x and above. NativeScript 5.0.0 is automatically createing all TypeScript enabled project with TypeScript versions 3.1.x and above.


> New `--resolveJsonModule`
> Often in Node.js applications a .json is needed. With TypeScript 2.9, `--resolveJsonModule` allows for importing, extracting types from and generating  .json files.

Example
```JSON
// config.json
{
    "count": 42,
    "users": [
        {"name": "John", "age": 35},
        {"name": "Ann", "age": 32},
        {"name": "George", "age": 24},
        {"name": "Mary", "age": 27},
        {"name": "Vivian", "age": 21}
    ],
    "env": "debug"
}
```

```TypeScript
// your-typescript-file.ts
import config from "./config.json";

console.log(config.count); // 42
console.log(config.env); // "debug"
```

```JSON
// tsconfig.json
{
    "compilerOptions": {
        "module": "commonjs",
        "resolveJsonModule": true,
        "esModuleInterop": true
    }
}
--p
```