const relative = require("path").relative;

const message = "No internal modules imports with absolute path";

const getWithoutLastSegment = path => {
  const parts = path.split("/").reverse();
  const [_ignored, ...lastParts] = parts;

  return lastParts.reverse().join("/");
};

const getHasError = (filePath, importSource) => {
  if (filePath.endsWith(importSource)) {
    return true;
  }

  const importPath = getWithoutLastSegment(importSource);

  if (importPath.indexOf(".") !== -1) {
    return false;
  }

  if (!importPath) {
    return false;
  }
  const relativePath = relative(process.cwd(), filePath);
  const [__ignored, ...relativeParts] = relativePath.split("/");
  const relativePartsWithoutNamespace = relativeParts.join("/");

  if (!relativePartsWithoutNamespace) {
    return false;
  }
  return importSource.indexOf(relativePartsWithoutNamespace) === 0;
};

module.exports.noAbsoluteInternalImports = {
  message,
  meta: {
    docs: {
      description:
        "This will disallow absolute imports that contained in the same module",
      category: "",
      recommended: false
    },
    fixable: null,
    schema: []
  },

  create(context) {
    const filePath = context.getFilename();

    const fileLocation = getWithoutLastSegment(filePath);

    return {
      ImportDeclaration(node) {
        const importSource = node.source.value;
        const hasError = getHasError(fileLocation, importSource);

        if (hasError) {
          context.report({
            node,
            message
          });
        }
      }
    };
  }
};
