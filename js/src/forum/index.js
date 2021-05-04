import Toastify from 'toastify-js';
import { extend } from 'flarum/common/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';




app.initializers.add('justoverclock/flarum-ext-toastme', () => {
  extend(IndexPage.prototype, 'oninit', function () {
    this.toastAdded = false;
  });

  extend(IndexPage.prototype, 'oncreate', function () {
    if (app.forum.attribute('EnableToastify') === true && !this.toastAdded) {
      Toastify({
        text: app.translator.trans('flarum-ext-toastme.forum.message1'),
        duration: -1,
        offset: {
          x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 400 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        destination: "https://flarum.it",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "#e39709",
        stopOnFocus: true, // Prevents dismissing of toast on hover
      }).showToast();
      this.toastAdded = true;
    }
  })
})
