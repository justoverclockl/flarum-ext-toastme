/*
 * This file is part of justoverclock/flarum-ext-toastme.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

app.initializers.add('justoverclock/toastme', () => {
  app.extensionData.for('justoverclock-toastme').registerSetting({
    setting: 'justoverclock-toastme.enable.toast',
    label: app.translator.trans('flarum-ext-toastme.admin.enabletoast'),
    help: app.translator.trans('flarum-ext-toastme.admin.helpenable'),
    type: 'boolean',
  });
  app.extensionData.for('justoverclock-toastme').registerSetting({
    setting: 'justoverclock-toastme.offsety',
    name: 'offsetY',
    type: 'number',
    label: app.translator.trans('flarum-ext-toastme.admin.offsetyy'),
    help: app.translator.trans('flarum-ext-toastme.admin.offsetydesc'),
  });
  app.extensionData.for('justoverclock-toastme').registerSetting({
    setting: 'justoverclock-toastme.offsetx',
    name: 'offsetX',
    type: 'number',
    label: app.translator.trans('flarum-ext-toastme.admin.offsetxx'),
    help: app.translator.trans('flarum-ext-toastme.admin.offsetxdesc'),
  });
  app.extensionData.for('justoverclock-toastme').registerSetting({
    setting: 'justoverclock-toastme.destination',
    name: 'dest',
    type: 'url',
    placeholder: '"http://yoursite.com"',
    label: app.translator.trans('flarum-ext-toastme.admin.dest'),
    help: app.translator.trans('flarum-ext-toastme.admin.destdesc'),
  });
  app.extensionData.for('justoverclock-toastme').registerSetting({
    setting: 'justoverclock-toastme.duration',
    name: 'dur',
    type: 'text',
    label: app.translator.trans('flarum-ext-toastme.admin.duration'),
    help: app.translator.trans('flarum-ext-toastme.admin.durdesc'),
  });
  app.extensionData.for('justoverclock-toastme').registerSetting({
    setting: 'justoverclock-toastme.gravity',
    name: 'grav',
    type: 'text',
    label: app.translator.trans('flarum-ext-toastme.admin.gravity'),
    help: app.translator.trans('flarum-ext-toastme.admin.gravdesc'),
  });
  app.extensionData.for('justoverclock-toastme').registerSetting({
    setting: 'justoverclock-toastme.position',
    name: 'pos',
    type: 'text',
    label: app.translator.trans('flarum-ext-toastme.admin.position'),
    help: app.translator.trans('flarum-ext-toastme.admin.posdesc'),
  });
  app.extensionData.for('justoverclock-toastme').registerSetting({
    setting: 'justoverclock-toastme.background',
    name: 'backgr',
    type: 'text',
    label: app.translator.trans('flarum-ext-toastme.admin.background'),
    help: app.translator.trans('flarum-ext-toastme.admin.backgrounddesc'),
  });
  app.extensionData.for('justoverclock-toastme').registerSetting({
    setting: 'justoverclock-toastme.message',
    name: 'message',
    type: 'text',
    label: app.translator.trans('flarum-ext-toastme.admin.message'),
    help: app.translator.trans('flarum-ext-toastme.admin.messagedesc'),
  });
});
