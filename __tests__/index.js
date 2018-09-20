import React, { Component } from 'react';
import { mount } from 'enzyme';

import SimpleValue from '../index.js';

const optionsPrimary = [
  { value: 'blue', label: 'Blue' },
  { value: 'red', label: 'Red' },
  { value: 'yellow', label: 'Yellow' },
];
const optionsSecondary = [
  { value: 'green', label: 'Green' },
  { value: 'orange', label: 'Orange' },
  { value: 'purple', label: 'Purple' },
];
const groupedOptions = [
  { label: 'Primary', options: optionsPrimary },
  { label: 'Secondary', options: optionsSecondary },
];

test('Should return a complex value', () => {
  let complexValue;
  const wrapper = mount(
    <SimpleValue options={optionsPrimary} value="blue">
      {({ value }) => {
        complexValue = value;
        return null;
      }}
    </SimpleValue>
  );

  expect(complexValue).toEqual({ value: 'blue', label: 'Blue' });

  wrapper.unmount();
});

test('Should return a complex defaultValue', () => {
  let complexDefault;
  const wrapper = mount(
    <SimpleValue options={optionsPrimary} defaultValue="blue">
      {({ defaultValue }) => {
        complexDefault = defaultValue;
        return null;
      }}
    </SimpleValue>
  );

  expect(complexDefault).toEqual({ value: 'blue', label: 'Blue' });

  wrapper.unmount();
});

test('Grouped should return a complex value', () => {
  let complexValue;
  const wrapper = mount(
    <SimpleValue options={groupedOptions} value="blue">
      {({ value }) => {
        complexValue = value;
        return null;
      }}
    </SimpleValue>
  );

  expect(complexValue).toEqual({ value: 'blue', label: 'Blue' });

  wrapper.unmount();
});

test('Multi should return a complex value', () => {
  let complexValue;
  const wrapper = mount(
    <SimpleValue options={optionsPrimary} value="blue, red" isMulti>
      {({ value }) => {
        complexValue = value;
        return null;
      }}
    </SimpleValue>
  );

  expect(complexValue).toEqual([
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
  ]);

  wrapper.unmount();
});

test('Grouped Multi should return a complex value', () => {
  let complexValue;
  const wrapper = mount(
    <SimpleValue options={groupedOptions} value="green, orange" isMulti>
      {({ value }) => {
        complexValue = value;
        return null;
      }}
    </SimpleValue>
  );

  expect(complexValue).toEqual([
    { value: 'green', label: 'Green' },
    { value: 'orange', label: 'Orange' },
  ]);

  wrapper.unmount();
});
