import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-form/docs/Select.md';
import { version } from 'terra-form/package.json';
import Markdown from 'terra-markdown';
import SelectProps from 'terra-form/docs/props-table/Select.md';
/* eslint-enable import/no-extraneous-dependencies */

// Example Files
import SelectExamples from 'terra-site/lib/examples/form/examples/Select';

const FormSelectFieldExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props" src={SelectProps} />
    <SelectExamples />
  </div>
);

export default FormSelectFieldExamples;
