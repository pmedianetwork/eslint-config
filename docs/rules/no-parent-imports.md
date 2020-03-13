# no-parent-imports

### Rule Details

This will disallow imports that contain `../..`.
When we want to go to far up to import a module, we should use an absolute import.

### Examples of **incorrect** code for this rule:

```js
import foo from "../../foo/bar";
```

```js
import foo from "../../../foo/bar";
```

### Examples of **correct** code for this rule:

```js
import foo from "../foo";
```

```js
import foo from "./foo";
```

```js
import foo from ".";
```

```js
import foo from "./foo/bar";
```
