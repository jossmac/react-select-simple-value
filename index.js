// Utils

function flatten(arr) {
  return arr.reduce((acc, val) => (Array.isArray(val.options)
    ? acc.concat(flatten(val.options))
    : acc.concat(val)
  ), []);
}
const clean = x => x.trim();
const toArray = str => str.split(',').map(clean);
const toString = arr => arr.join(',');

function getValue(opts, val, getOptVal, isMulti) {
  if (val === undefined) return undefined;

  const options = flatten(opts);
  const value = isMulti
    ? options.filter(o => toArray(val).includes(getOptVal(o)))
    : options.find(o => getOptVal(o) === val);

  return value;
}

// Component

const defaultGetOptionValue = opt => opt.value;

function ReactSelectSimpleValue({
  children,
  defaultValue: simpleDefault,
  getOptionValue = defaultGetOptionValue,
  isMulti = false,
  options,
  value: simpleValue,
}) {
  const value = getValue(options, simpleValue, getOptionValue, isMulti);
  const defaultValue = getValue(options, simpleDefault, getOptionValue, isMulti);

  return children({ defaultValue, getOptionValue, isMulti, options, value });
}

export default ReactSelectSimpleValue;
