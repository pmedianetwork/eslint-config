# no-react-import

### Rule Details

This rule ensures code consistency by disallowing importing default react export

### Examples of **incorrect** code for this rule:

```js
import React from "react";
```

### Examples of **correct** code for this rule:

```js
import * as React from "react";
```

