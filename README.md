# react-select-simple-value

A simple value wrapper for [react-select](https://github.com/JedWatson/react-select).

### Install

```bash
yarn add react-select-simple-value
```

### Use

```jsx
import ReactSelect from 'react-select';
import SimpleValue from 'react-select-simple-value';

export const MySelect = ({ options, value, ...props }) => (
  <SimpleValue options={options} value={value}>
    {simpleProps => <ReactSelect ref={ref} {...props} {...simpleProps} />}
  </SimpleValue>
);

/* elsewhere in your application */

class extends React.Component {
  render() {
    return (
      <MySelect
        options={[
          { value: 'blue', label: 'Blue' },
          { value: 'red', label: 'Red' },
          { value: 'yellow', label: 'Yellow' },
        ]}
        value="blue"
      />
    );
  }
}
```

### Props

The following props are accepted, consumed, and passed on to the `children` function. Only `defaultValue` and `value` are augmented.

- defaultValue
- getOptionValue
- isMulti
- options
- value
