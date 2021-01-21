/**
 * Copyright (c) 2019-present, SpeedETab, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

/**
 * This is just a placeholder for the warning module to remove
 * facebook copyrighted code. The module itself does nothing.
 */

var warning = function() {
  if (console && console.log && console.error) {
    console.error("Warning Placeholder: This is just a placeholder for warning messages, something is failing.");
  }
};

module.exports = warning;
