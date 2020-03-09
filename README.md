# eslint-config

This is pmedianetwork's [ESLint](http://eslint.org) config used for JavaScript projects.
It is based on [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript) and uses `prettier`.

## Installation

`npm install --save-dev pmedianetwork/eslint-config`

Use it by setting the extends field in your `.eslintrc`:

```js
{
  extends: 'plugin:@pmedianetwork/recommended',
};
```

## Optionally combine

### With flow

```js
{
  extends: 'plugin:@pmedianetwork/flow',
};
```

### With typescript 

```js
{
  extends: 'plugin:@pmedianetwork/typescript',
};
```


## Release Management

See http://handbook.adverity.net/changesets/#the-library-changesets-workflow

## Testing

To run tests run `npm run test`
