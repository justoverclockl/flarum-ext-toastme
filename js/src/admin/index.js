import app from 'flarum/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

app.extensionData.for('justoverclock-toastme').registerSetting({
  setting: 'justoverclock-guestengagement.enable.toast',
  label: app.translator.trans('flarum-ext-toastme.admin.enabletoast'),
  type: 'boolean',
});
