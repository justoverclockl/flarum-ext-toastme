import app from 'flarum/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

app.extensionData.for('justoverclock-toastme').registerSetting({
  setting: 'justoverclock-toastme.enable.toast',
  label: 'Enable/Disable Toast',
  help: 'Use this setting to enable or disable the toast alert',
  type: 'boolean',
});
