# no-private-imports

### Rule Details

This will disallow importing from inside of module. Only public interface imports are allowed.

Given that in configuration we specify that our module namespaces are `['components', 'features', 'hooks', 'utils']`

### Examples of **incorrect** code for this rule:
        
```js
import foo from "components/foo/helpers"
```

### Examples of **correct** code for this rule:

```js
import foo from "components/foo"
```

```js
import foo from 'something/foo/bar'
```

### configuration 

In your eslint rc file provide extra configuration:
```
export default = {
    ...
    settings: {
        "@pmedianetwork": {
           "moduleNamespaces": ["features", "components"] 
        }
    }
}
```

### Opt in

This is an opt-in only rule. To enable it, add to your eslint `config.rules` `"@pmedianetwork/no-private-imports": 2` and provide a configuration.

