Repository to practice Typescript


## Compiling TS

`tsc filename.ts filename.js` 

(flag .js file if name not same as .ts name)

`-w` 

to  'watch' .ts file and compile on save

## initialize tsconfig.json

`tsc --init`

```
"outDir": "./public",
"rootDir": "./src"
```

anything in src dir will compile to public dir

`"include": ["src"]`

will only include files in src dir