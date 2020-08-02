---
issue: https://github.com/pmedianetwork/adverity-presense-frontend/issues/867
type: minor
label: Enhancements
---

Make prettier more integrated with the repository by exporting the configuration and encapsulating prettier within the package

## Breaking changes

To update to this verison, please remove prettier from your repository by running `npm remove prettier`

Then remove your local `.prettierrc` file and create a new one called `prettier.config.js` with the following content:


```
const { prettier } = require('@pmedianetwork/eslint-plugin')

module.exports = prettier
```
