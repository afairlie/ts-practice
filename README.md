Repository to practice Typescript

# Notes from Net Ninja Typescript Tutorial

https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI

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

## Interface

an interface defines how a class or object should be structured, but it's different than a class, because it doesn't generate or create new objects, we just use it to enforce a certain type of structure.

## Generics

EXAMPLE 1

```
const addUID = <T extends object>(obj: T) => {
  return {...obj, uid: 1}
}

addUID({}) // valid
```

EXAMPLE 2

```
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: <T>;
}

// declare the generic type in <angle brackets>
const docThree: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: 'shaun'
}
```