$.webview.url=Alloy.Globals.url;
$.index.open();

$.backButton.addEventListener('click', function(e) {
  $.webview.goBack();
});

// WebView内での戻るボタンを有効にします
if(OS_ANDROID){
  $.webview.addEventListener('beforeload',function(e){
     Ti.API.debug("読み込み開始: "+e.url);
     if(e.url.indexOf("market://") != -1){
        Ti.Platform.openURL(e.url);
        $.webview.url = Alloy.Globals.url;
     }
  });
}