import { app, Tray, Menu, BrowserWindow, nativeTheme } from 'electron';
import path from 'path';
import { createShellWindow, restoreLastShellWindow } from './windows';
import * as tabManager from './tabs/manager';
import * as settingsDb from '../dbs/settings';

const IS_MAC = process.platform === 'darwin';

// globals
// =

var tray;

// exported api
// =

export function setup() {
  // Tray icon disabled
}

// internal
// =

function getIcon() {
  if (IS_MAC) {
    return nativeTheme.shouldUseDarkColors
      ? 'assets/img/tray-icon-white.png'
      : 'assets/img/tray-icon-black.png';
  }
  return 'assets/img/tray-icon-white@2x.png';
}

function updateIcon() {
  // Disabled
}

async function buildMenu() {
  // Disabled
}

function onClickOpen() {
  var win = BrowserWindow.getAllWindows()[0];
  if (win) {
    win.show();
    tabManager.create(win, undefined, { setActive: true });
  } else {
    createShellWindow();
  }
}

function onClickRestore() {
  restoreLastShellWindow();
}

function onTogglePersist(v) {
  settingsDb.set('run_background', v ? 1 : 0);
}
