/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

if (!('indexedDB' in window)) {
  window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
}
