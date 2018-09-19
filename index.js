function flatten(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val.options)
        ? acc.concat(flatten(val.options))
        : acc.concat(val),
    []
  );
}

function defaultGetOptionValue(opt) {
  return opt.value;
}

function getValue(opts, val, getOptVal) {
  if (val === undefined) return undefined;

  const options = flatten(opts);
  const value = options.find(o => getOptVal(o) === val);

  return value;
}

function ReactSelectSimpleValue({
  children,
  defaultValue: simpleDefault,
  getOptionValue = defaultGetOptionValue,
  options,
  value: simpleValue,
}) {
  const value = getValue(options, simpleValue, getOptionValue);
  const defaultValue = getValue(options, simpleDefault, getOptionValue);

  return children({ defaultValue, getOptionValue, options, value });
}

export default ReactSelectSimpleValue;
