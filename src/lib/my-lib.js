import camelCase from 'lodash.camelcase';

export default function () {
  console.log('Hello World');
  document.write('<h1>Hello World</h1><p>Camel Case from <code>lodash.camelcase</code>: ' + camelCase('Hello World') + '</p>');
}