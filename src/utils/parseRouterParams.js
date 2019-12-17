/**
 * @function parseRouterId
 * @param {String} param router param
 * @returns {Integer} router Id without ':'
 */
function parseRouterId(param) {
  return Number(param.replace(/:/, ''));
}

export { parseRouterId };
