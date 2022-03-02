import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

import * as context from '../data'

export default handlebars({
  context,
  partialDirectory: [
    resolve(__dirname, '../dialogs'),
    resolve(__dirname, '../components'),
    resolve(__dirname, '../sections'),
    resolve(__dirname, '../widgets'),
  ],
  helpers: {
    if_even (conditional, options) {
      return (conditional % 2) == 0 ? options.fn(this) : options.inverse(this);
    },
    each_in_range: (from, to, context, options) => {
      let item = '';
      for (let i = from, j = to; i < j; i++) {
        item = item + options.fn(context[i]);
      }
      return item;
    },
    splice_of: (v, idx) => v.splice(0, idx),
    get_length: v => v.length,
    json: v => JSON.stringify(v),
    math: (lValue, operator, rValue) => {
      lValue = parseFloat(lValue);
      rValue = parseFloat(rValue);
      // @ts-expect-error
      return {
        '+': lValue + rValue,
        '-': lValue - rValue,
        '*': lValue * rValue,
        '/': lValue / rValue,
        '%': lValue % rValue
      }[operator];
    },
  }
});
