const mapChildNodesToParent = (inputJSON) => {

  // look for elements with parent_id = null, 
  const rootElement = reductToRootElement(inputJSON);

  


}

const reductToRootElement = (inputJSON) => {

  const allKeys = Object.keys(inputJSON);

  const rootElementReducer = allKeys.reduce((rootElementAccum, currentKey) => {
    const currentElementChildrenArray = inputJSON[currentKey];
    const filtered = currentElementChildrenArray.filter((obj) => obj.parent_id === null);
    if (filtered.length > 0) {
      rootElementAccum.push(filtered[0]);
    }
    return rootElementAccum;
  }, []);

  // Oops... malformed input JSON, got more than one root elements
  // discontinue.
  if (Object.entries(rootElementReducer).length > 1) {
    throw TypeError("Invalid input JSON, contains more than one root element");
  }

  return rootElementReducer[0];
}

module.exports = mapChildNodesToParent;