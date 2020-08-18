const formatJSON = {
  method: 'POST',
  path: '/format',
  handler: (request, h) => {
    const inputJSON = request.payload;
    return inputJSON;
  }
}

module.exports = {
  formatJSON
}