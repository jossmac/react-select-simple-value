function getValue(opts, val) {
  if (val === undefined) return undefined;
  return opts.find(o => o.value === val);
}

function ReactSelectSimpleValue({
  children,
  defaultValue: simpleDefault,
  options,
  value: simpleValue,
}) {
  const value = getValue(options, simpleValue);
  const defaultValue = getValue(options, simpleDefault);

  return children({ defaultValue, options, value });
}

export default ReactSelectSimpleValue;
