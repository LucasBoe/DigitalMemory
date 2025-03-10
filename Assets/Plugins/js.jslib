mergeInto(LibraryManager.library, {

  EnterTime: function(time) {
    const message = {
      type: 'EnterTime',
      data: {
        time: time
      }
    }
    window.postMessage(message, '*')
  },
  EnterCloseup: function(closeup) {
    const message = {
      type: 'EnterCloseup',
      data: {
        closeup: Pointer_stringify(closeup)
      }
    }
    window.postMessage(message, '*')
  },
  LeaveCloseup: function(closeup) {
    const message = {
      type: 'LeaveCloseup',
      data: {
        closeup: Pointer_stringify(closeup)
      }
    }
    window.postMessage(message, '*')
  },
});