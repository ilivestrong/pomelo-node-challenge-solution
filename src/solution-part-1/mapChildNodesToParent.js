const input = (inputJSON) => {

  let maxDepth = Object.keys(inputJSON).length - 1;
  let currentLevel = 0;
  let matcherLevel = 0;
  let transformedOutput = [];

  const transform = () => {
    const rootElement = reduceToRootElement(inputJSON);
    transformedOutput.push(rootElement);

    bindChildren();
    return transformedOutput;
  }

  /**
 * Lookup for object with parent_id = null,
 * incase there are multiple such objects or none, we assume the inputJSON is malformed
 * and hence return a JavaScript TypeError. 
 * @param inputJSON
 * @returns Object | Error
 */
  const reduceToRootElement = () => {

    const allKeys = Object.keys(inputJSON);

    const rootElementReducer = allKeys.reduce((rootElementAccum, currentKey) => {
      const currentElementChildren = inputJSON[currentKey];
      const filtered = currentElementChildren.filter((child) => child.parent_id === null);
      if (filtered.length > 0) {
        rootElementAccum.push(filtered);
      }
      return rootElementAccum;
    }, []);

    const rootElementCount = Object.entries(rootElementReducer);
    if (rootElementCount > 1) {
      throw Error("Invalid input JSON, contains more than one root element");
    } else if (rootElementCount === 0) {
      throw Error("Invalid input JSON, contains no root element");
    }

    return rootElementReducer[0][0];
  }

  /**
   * Get elements based on index i.e., level from original input JSON.
   * @param {int} level
   * @returns Array of elements on level requested
   */
  const getElementsByLevel = (level) => {
    if (level <= maxDepth) {
      return inputJSON[level];
    }
    return null;
  }

  /**
   * Core recursive function to arrange children into parent nodes based on their level and parent_id.
   * @param {Object} rootElement - Root level node 
   * @param {*} transformedOutput - Progressively build up Object on each recursion based on level
   */
  const bindChildren = () => {

    if (currentLevel === maxDepth) {
      return;
    }

    if (currentLevel === 0) {
      currentLevel++;

      const currentLevelNodes = getElementsByLevel(currentLevel);
      transformedOutput[0].children = currentLevelNodes;
    } else {
      currentLevel++;

      const currentLevelNodes = getElementsByLevel(currentLevel);
      if (currentLevelNodes && currentLevelNodes.length > 0) {
        const transformedChildren = transformedOutput[matcherLevel].children;

        if ((currentLevel - 1) === transformedChildren[matcherLevel].level) {
          currentLevelNodes.forEach(
            (cn) => {
              const matchedIndex = transformedChildren.map(tc => tc.id).indexOf(cn.parent_id);

              if (matchedIndex !== -1) {
                transformedChildren[matchedIndex].children.push(cn);
              }
            }
          );
        }
      }
    }
    bindChildren();
  }

  return {
    transform,
  };
}

module.exports = input;