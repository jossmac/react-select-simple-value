# react-select-simple-value

A simple value wrapper for react-select.

### Install

```bash
yarn add react-select-simple-value
```

### Use

```jsx
import React, { Component } from 'react';
import Select from 'react-select';
import SimpleValue from 'react-select-simple-value';

const options = [
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
];

export default class App extends Component {
  render() {
    return (
      <SimpleValue options={options} value="blue">
        {props => <Select {...props} />}
      </SimpleValue>
    );
  }
}
```
