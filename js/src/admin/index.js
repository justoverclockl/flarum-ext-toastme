import app from 'flarum/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

app.extensionData.for('justoverclock-toastme').registerSetting({
  setting: 'justoverclock-toastme.enable.toast',
  label: 'Enable Toast',
  help: app.translator.trans('flarum-ext-toastme.admin.enabletoast'),
  type: 'boolean',
});
