// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron')
let aspect = require("electron-aspectratio")

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
// let mainWindowHandler

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    show: false,
    width: 1440,
    height: 1024,
    fullscreen: false,
    fullscreenable: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  ipcMain.on('switchFullScreen', (event) => {
    mainWindow.setFullScreen(!mainWindow.isFullScreen());
    mainWindow.setSimpleFullScreen(!mainWindow.isSimpleFullScreen());
  });

  // mainWindowHandler = new aspect(mainWindow);
  // mainWindowHandler.setRatio(8, 5, 10);

  // DOT NOT DELETE
  // this is target code for aspect ration handling.
  // A PR is being proposed to handle aspect ratio on windows platform
  // will move to this implem right after PR merged and released
  // https://github.com/electron/electron/pull/18306
  //   const defaultRatio = 8 / 5;
  //   mainWindow.setAspectRatio(defaultRatio);
  //   mainWindow.on("resize", () => {
  //     const ratio = mainWindow.isFullScreen() ? 0 : defaultRatio;
  //     mainWindow.setAspectRatio(ratio);
  //   });
  // DOT NOT DELETE


  // Open the DevTools.
  // mainWindow.webContents.openDevTools({
  //   mode: 'detach'
  // })

  // and load the index.html of the app.
  mainWindow.loadFile('www/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
