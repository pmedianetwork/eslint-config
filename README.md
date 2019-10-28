# eslint-config

This is pmedianetwork's [ESLint](http://eslint.org) config used for JavaScript projects.
It is based on [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript) and uses `prettier`.

Use it by setting the extends field in your `.eslintrc`:

```js
{
  extends: '@pmedianetwork/eslint-config',
};
```

## Optionally combine

### With flow

```js
{
  extends: '@pmedianetwork/eslint-config/flow',
};
```

### With typescript 

```js
{
  extends: '@pmedianetwork/eslint-config/typescript',
};
```
