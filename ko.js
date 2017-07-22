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
	container.style.position = 'fixed';
	container.style.zIndex = '2147483647';
	container.style.top = '100px';
	container.style.left = '0';
	container.style.right = '0';
	container.style.marginLeft = 'auto';
	container.style.marginRight = 'auto';
	container.style.padding = '15px';
	container.style.width = '400px';
	container.style.backgroundColor = '#ff3737';

	title.style.textAlign = 'left';
	title.style.fontSize = '18px';
	title.style.color = '#ffffff';

	content.style.marginTop = '15px';
	content.style.textAlign = 'left';
	content.style.fontSize = '14px';
	content.style.color = '#ffffff';

	closeBtn.style.position = 'absolute';
	closeBtn.style.top = '15px';
	closeBtn.style.right = '15px';
	closeBtn.style.cursor = 'pointer';
	closeBtn.style.lineHeight = '1';
	closeBtn.style.fontSize = '14px';
	closeBtn.style.color = '#ffffff';

	// Append nodes
	container.appendChild(title);
	container.appendChild(content);
	container.appendChild(closeBtn);
	document.body.appendChild(container);
}());
