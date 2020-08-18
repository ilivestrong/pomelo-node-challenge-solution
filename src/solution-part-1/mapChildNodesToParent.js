const mapChildNodesToParent = (inputJSON) => {

  // look for elements with parent_id = null, 
  const rootElement = reductToRootElement(inputJSON);

   // => if count > 1 raise error
  if (Object.entries(rootElement).length > 1) {
    throw TypeError("Invalid input JSON, contains more than one root element");
  }
}

const reductToRootElement = (inputJSON) => {

  const allKeys = Object.keys(inputJSON);

  const rootElementReducer = allKeys.reduce((rootElementAccum, currentKey) => {
    const currentElementChildrenArray = inputJSON[currentKey];
    const rootElements = currentElementChildrenArray.filter((obj) => obj.parent_id === null);
    if (rootElements.length > 0) {
      rootElementAccum.push(rootElements[0]);
    }
    return rootElementAccum;
  }, []);

  return rootElementReducer;
}

module.exports = mapChildNodesToParent;