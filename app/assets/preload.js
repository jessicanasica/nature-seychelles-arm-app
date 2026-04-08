/**
 * Copyright (c) 2025 Jessica Nasica. All rights reserved.
 */

const { contextBridge, ipcRenderer } = require('electron');

console.log("Preload script loaded");

contextBridge.exposeInMainWorld('electron', {
  exitApp: () => {
    console.log("exitApp function called");
    ipcRenderer.send('exit-app');
  },
  getAppPath: () => ipcRenderer.invoke('get-app-path') 
});
