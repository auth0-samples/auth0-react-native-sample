### A base TSConfig for working with React Native.

Add the package to your `"devDependencies"`:

```sh
npm install --save-dev @tsconfig/react-native
yarn add --dev @tsconfig/react-native
```

Add to your `tsconfig.json`:

```json
"extends": "@tsconfig/react-native/tsconfig.json"
```

---

The `tsconfig.json`: 

```jsonc
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "React Native",
  "_version": "3.0.2",
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "types": ["react-native", "jest"],
    "lib": [
      "es2019",
      "es2020.bigint",
      "es2020.date",
      "es2020.number",
      "es2020.promise",
      "es2020.string",
      "es2020.symbol.wellknown",
      "es2021.promise",
      "es2021.string",
      "es2021.weakref",
      "es2022.array",
      "es2022.object",
      "es2022.string"
    ],
    "allowJs": true,
    "jsx": "react-native",
    "noEmit": true,
    "isolatedModules": true,
    "strict": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": false,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}

```

You can find the [code here](https://github.com/tsconfig/bases/blob/master/bases/react-native.json).
