(function() {
	var CharsetTools = Util.charset;
	function init() {
		initListeners();
	}

	/**
	 * @description 监听
	 */
	function initListeners() {
		//测试功能并打印
		bindEvent('#testFunctionAndPrint', function() {
			var testStr = document.getElementById('testStr').value;

			var gbk_testStr = CharsetTools.utf16StrToGbkStr(testStr);
			var gbk_base64_testStr = CharsetTools.Base64.encode(testStr,'gbk');
			var utf8_testStr = CharsetTools.utf16StrToUtf8Str(testStr);
			var utf8_base64_testStr = CharsetTools.Base64.encode(testStr,'utf8');

			var html = '';

			html += '原字符串:' + testStr + '<br />';
			html += '***' + '<br />';
			html += '转为gbk后:' + gbk_testStr + '<br />';
			html += '***' + '<br />';
			console.log('gbk:' + gbk_testStr);
			html += '转为utf8后:' + utf8_testStr + '<br />';
			html += '***' + '<br />';
			html += 'gbk型的base64码:' + gbk_base64_testStr + '<br />';
			html += '***' + '<br />';
			html += 'utf8型的base64码:' + utf8_base64_testStr + '<br />';
			html += '***' + '<br />';
			html += '从gbk转回utf16:' + CharsetTools.gbkStrToUtf16Str(gbk_testStr) + '<br />';
			html += '***' + '<br />';
			html += '从utf8转回utf16:' + CharsetTools.utf8StrToUtf16Str(utf8_testStr) + '<br />';
			html += '***' + '<br />';
			html += '从gbkBase64转回utf16:' + CharsetTools.Base64.decode(gbk_base64_testStr,'gbk') + '<br />';
			html += '***' + '<br />';
			html += '从utd8Base64转回utf16:' + CharsetTools.Base64.decode(utf8_base64_testStr,'utf8') + '<br />';
			document.getElementById('testPrint').innerHTML = html;
		});
		
		//gbk base64加密
		bindEvent('#encodeb64GBK', function() {
			var html = '';
			var value = document.getElementById('enDecodeStr').value;
			html = CharsetTools.Base64.encode(value,'gbk');
			document.getElementById('testPrint').innerHTML = html;
			console.log('gbkb64:' + html);
		});
		//UTF base64加密
		bindEvent('#encodeb64UTF', function() {
			var html = '';
			var value = document.getElementById('enDecodeStr').value;
			html = CharsetTools.Base64.encode(value,'utf8');
			document.getElementById('testPrint').innerHTML = html;
			console.log('utfb64:' + html);
		});
		
		//gbk base64解密
		bindEvent('#decodeb64GBK', function() {
			var html = '';
			var value = document.getElementById('enDecodeStr').value;
			html = CharsetTools.Base64.decode(value,'gbk');
			document.getElementById('testPrint').innerHTML = html;
			console.log('gbk解密:' + html);
		});
		//UTF base64解密
		bindEvent('#decodeb64UTF', function() {
			var html = '';
			var value = document.getElementById('enDecodeStr').value;
			html = CharsetTools.Base64.decode(value,'utf8');
			document.getElementById('testPrint').innerHTML = html;
			console.log('utf解密:' + html);
		});
		
		//UTF base64加密并uri
		bindEvent('#encodeb64UTFAndUri', function() {
			var html = '';
			var value = document.getElementById('enDecodeStr').value;
			html = CharsetTools.Base64.encode(value,'utf8',true);
			document.getElementById('testPrint').innerHTML = html;
			console.log('utfb64:' + html);
		});
		//UTF base64解密
		bindEvent('#decodeb64UTFAndUri', function() {
			var html = '';
			var value = document.getElementById('enDecodeStr').value;
			html = CharsetTools.Base64.decode(value,'utf8',true);
			document.getElementById('testPrint').innerHTML = html;
			console.log('utf解密:' + html);
		});
	}

	/**
	 * @description 绑定监听事件 暂时先用click
	 * @param {HTMLElement||String} dom 单个dom,或者selector
	 * @param {Function} callback 回调函数
	 * @param {String} 事件名
	 */
	function bindEvent(dom, callback, eventName) {
		eventName = eventName || 'click';
		if(typeof dom === 'string') {
			//选择
			dom = document.querySelectorAll(dom);
		}
		if(!dom) {
			return;
		}
		if(dom.length > 0) {
			for(var i = 0, len = dom.length; i < len; i++) {
				dom[i].addEventListener(eventName, callback);
			}
		}
	};
	init();
})();