const mapChildNodesToParent = (inputJSON) => {

  // look for elements with parent_id = null, 
  const rootElement = reduceToRootElement(inputJSON);
  const distinctIDs = reduceToDistinctIDs(inputJSON);


 




}

/**
 * Lookup for object with parent_id = null,
 * incase there are multiple such objects, we assume the inputJSON is malformed
 * and hence return a JavaScript TypeError.
 * @param inputJSON
 * @returns Object | TypeError
 */
const reduceToRootElement = (inputJSON) => {

  const allKeys = Object.keys(inputJSON);

  const rootElementReducer = allKeys.reduce((rootElementAccum, currentKey) => {
    const currentElementChildren = inputJSON[currentKey];
    const filtered = currentElementChildren.filter((child) => child.parent_id === null);
    if (filtered.length > 0) {
      rootElementAccum.push(filtered);
    }
    return rootElementAccum;
  }, []);

  // Oops... malformed input JSON, got more than one root element
  // error out.
  if (Object.entries(rootElementReducer).length > 1) {
    throw TypeError("Invalid input JSON, contains more than one root element");
  }

  return rootElementReducer[0][0];
}

/**
 * Get distinct IDs, so that a lookup can be done incrementally on them for content.
 * @param inputJSON
 * @returns Array - Distinct IDs Array.
 */
const reduceToDistinctIDs = (inputJSON) => {

  const allKeys = Object.keys(inputJSON);

  const distinctIDSReducer = allKeys.reduce((IDAccum, currentKey) => {

    const currentElementChildren = inputJSON[currentKey];
    const childrenElementIDs = currentElementChildren.map((child) => child.id);

    IDAccum.push(...childrenElementIDs);
    return IDAccum;

  }, []);

  const distinctIDs = [...new Set(distinctIDSReducer)];
  return distinctIDs;
}

const reduceToChildrenByParentID = (inputJSON, parentID) => {
  if (!inputJSON || !parentID) {
    return TypeError("Missig inputJSON and/or parentID");
  }
}

module.exports = mapChildNodesToParent;