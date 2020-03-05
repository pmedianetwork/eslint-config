---
issue: https://github.com/pmedianetwork/eslint-config/issues/65
type: major
---

Changed structure of project from config, to a plugin.
Added custom rules as warnings: 

no-absolute-internal-imports
no-parent-imports

To migrate to new version 
 * `npm remove @pmedianetwork/eslint-config`
 * `npm install --save-dev pmedianetwork/eslint-config`
 * update `.eslintrc` file to extend required config. Please use README.md

After that fix your lint errors :)
