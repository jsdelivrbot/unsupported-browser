(function () {
	// Create nodes
	var container = document.createElement('div');
	container.id = 'unsupported-browser';

	var title = document.createElement('h1');
	title.appendChild(document.createTextNode('지원하지 않는 브라우저로 접속하셨습니다.'));

	var content = document.createElement('p');
	content.appendChild(document.createTextNode('웹사이트의 내용이 정상적으로 보이지 않을 수 있습니다.'));
	content.appendChild(document.createElement('br'));
	content.appendChild(document.createTextNode('최신 브라우저를 사용해주세요.'));

	var closeBtn = document.createElement('a');
	closeBtn.appendChild(document.createTextNode('[X]'));
	closeBtn.title = '닫기';

	// Events
	var addEvent = function (element, event, fn) {
		if (element.addEventListener) { // Standard
			element.addEventListener(event, fn, false);
		} else if (element.attachEvent) { // IE <= 8
			element.attachEvent('on' + event, fn);
		}
	};

	var removeEvent = function (element, event, fn) {
		if (element.removeEventListener) { // Standard
			element.removeEventListener(event, fn, false);
		} else if (element.detachEvent) { // IE <= 8
			element.detachEvent('on' + event, fn);
		}
	};

	var close = function () {
		document.body.removeChild(container);
		removeEvent(closeBtn, 'click', close);
	};

	addEvent(closeBtn, 'click', close);

	// Styles
	container.style.cssText = 'position: fixed; z-index: 2147483647; top: 100px; left: 0; right: 0; margin-left: auto; margin-right: auto; padding: 15px; width: 400px; background-color: #ff3737'
	title.style.cssText = 'text-align: left; font-size: 18px; color: #ffffff'
	content.style.cssText = 'margin-top: 15px; text-align: left; font-size: 14px; color: #ffffff'
	closeBtn.style.cssText = 'position: absolute; top: 15px; right: 15px; cursor: pointer; line-height: 1; font-size: 14px; color: #ffffff'

	// Append nodes
	container.appendChild(title);
	container.appendChild(content);
	container.appendChild(closeBtn);
	document.body.appendChild(container);
}());
