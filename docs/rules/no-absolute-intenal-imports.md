# no-absolute-internal-imports

### Rule Details

Rule which will help to keep track of incorrect imports.
When we want to import a file which is internal a feature, we want to use relative path instead of absolute.

### Examples of **incorrect** code for this rule:

Assuming that we call import from `/src/components/Foo/index.js`:
```js
import foo from "components/Foo/utils";
```

```js
import foo from "components/Foo/utils/bar/baz";
```

```js
import foo from "components/Foo/components/Bar";
```

### Examples of **correct** code for this rule:

Assuming that we call import from `/src/components/Foo/index.js`:

```js
import foo from ".";
```

```js
import foo from "components/Bar";
```

