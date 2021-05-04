/*
 * This file is part of justoverclock/flarum-ext-toastme.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Toastify from 'toastify-js';
import { extend } from 'flarum/common/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';

app.initializers.add('justoverclock/flarum-ext-toastme', () => {
  extend(HeaderPrimary.prototype, 'oninit', function () {
    this.toastAdded = false;
  });

  extend(HeaderPrimary.prototype, 'oncreate', function () {
    if (app.forum.attribute('EnableToastify') === true && !this.toastAdded) {
      Toastify({
        text: app.forum.attribute('message'),
        duration: app.forum.attribute('dur'),
        offset: {
          x: app.forum.attribute('offsetX'), // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: app.forum.attribute('offsetY'), // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        destination: app.forum.attribute('dest'),
        newWindow: true,
        close: true,
        gravity: app.forum.attribute('grav'), // `top` or `bottom`
        position: app.forum.attribute('pos'), // `left`, `center` or `right`
        backgroundColor: app.forum.attribute('backgr'),
        stopOnFocus: true, // Prevents dismissing of toast on hover
      }).showToast();
      this.toastAdded = true;
    }
  });
});
