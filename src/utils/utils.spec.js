'use strict';

const test = require('tape');

const utils = require('./index');

test('utils.applyParameterDefaults', (t) => {
  [
    [{ upperBound: 100 }, { upperBound: 100 }, 'uses provided parameters'],
    [{}, { upperBound: 1000 }, 'sets default value if not present'],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = utils.applyParameterDefaults(parameters, {
        upperBound: 1000,
      });

      assert.deepEquals(actual, expected);
    });
  });
});
