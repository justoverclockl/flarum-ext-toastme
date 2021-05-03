import Toastify from 'toastify-js';
import { extend } from 'flarum/common/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';


app.initializers.add('justoverclock/flarum-ext-toastme', () => {

  const Toastyfy = Toastify({
    text: "This is a toast",
    duration: -1,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    backgroundColor: "#e39709",
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: function(){} // Callback after click
  }).showToast();
})


/*
if (app.forum.attribute('EnableToastify') === true)*/


