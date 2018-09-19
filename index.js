function getValue(opts, val) {
  return opts.find(o => o.value === val);
}

function ReactSelectSimpleValue({ children, options, value: simpleValue }) {
  const value = getValue(options, simpleValue);
  return children({ options, value });
}

export default ReactSelectSimpleValue;
