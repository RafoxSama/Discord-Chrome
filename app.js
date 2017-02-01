function updateWebviews() {
	var webview = document.querySelector('webview');
	webview.style.height = document.documentElement.clientHeight + 'px';
	webview.style.width = document.documentElement.clientWidth + 'px';
}

document.querySelector('webview').addEventListener('permissionrequest', function(e) {
	if (e.permission === 'media') {
		e.request.allow();
	}
});

var webview = document.querySelector('#superwebview');
webview.addEventListener('newwindow', function(e) {
  window.open(e.targetUrl);
});

onload = updateWebviews;
window.onresize = updateWebviews;

webview.addEventListener('loadcommit', function(e) {
  this.insertCSS({
    code: '.guilds-wrapper .btn-download-apps{ display: none !important; } .notice{ display: none !important; }',
    runAt: 'document_start'  // and added this
  });
});