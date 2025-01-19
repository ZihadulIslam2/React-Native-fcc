42 minute
npx start expo

```tsconfig.json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "**/*.jsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts"
, ]
}
```

video watched:
 55 min 