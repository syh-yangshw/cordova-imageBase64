var ImageBase64 = function() {
};

ImageBase64.prototype.base64FromUrl = function(url, success, fail) {
  var fileTransfer = new FileTransfer();
  var rand=Math.random(47).toString().split('.')[1];
  fileTransfer.download(
    url,
    cordova.file.cacheDirectory + '/imageBase64Cache_'+rand+'.jpg',
    function(entry) {
      var imagePath = entry.toURL().replace(/^file:\/\//i, '');
      return cordova.exec(success, fail, 'ImageBase64', 'base64', [imagePath]);
    },
    fail
  );
};

ImageBase64.prototype.base64 = function(filePath, success, fail) {
  return cordova.exec(success, fail, 'ImageBase64', 'base64', [filePath]);
};

module.exports = new ImageBase64();