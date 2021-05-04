<?php

/*
 * This file is part of justoverclock/flarum-ext-toastme.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\ToastMe;

use Flarum\Extend;
use Flarum\Api\Event\Serializing;


return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__.'/resources/locale'),
    (new Extend\Settings())->serializeToForum('EnableToastify', 'justoverclock-toastme.enable.toast', 'boolval', true),
    (new Extend\Settings)->serializeToForum('offsetY', 'justoverclock-toastme.offsety'),
    (new Extend\Settings)->serializeToForum('offsetX', 'justoverclock-toastme.offsetx'),
    (new Extend\Settings)->serializeToForum('dest', 'justoverclock-toastme.destination'),
    (new Extend\Settings)->serializeToForum('dur', 'justoverclock-toastme.duration'),
    (new Extend\Settings)->serializeToForum('grav', 'justoverclock-toastme.gravity'),
    (new Extend\Settings)->serializeToForum('pos', 'justoverclock-toastme.position'),
    (new Extend\Settings)->serializeToForum('backgr', 'justoverclock-toastme.background'),
    (new Extend\Settings)->serializeToForum('message', 'justoverclock-toastme.message'),
];
