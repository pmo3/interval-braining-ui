function isOnLine() {
  return 'onLine' in window.navigator && window.navigator.onLine
}


function offlineDescribe(description, block) {
  if(!isOnLine()) {
    describe(description, block);
  } else {
    console.log('Skipping "' + description + '" due to navigator.onLine state of true')
  }
}


function onlineDescribe(description, block) {
  if(isOnLine()) {
    describe(description, block);
  } else {
    console.log('Skipping "' + description + '" due to navigator.onLine state of false')
  }
}
