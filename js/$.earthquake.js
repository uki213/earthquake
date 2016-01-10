/*global jQuery, MutationObserver */
(function ($) {
	'use strict';
	$.fn.earthquake = function (config) {
		// 変数設定
		var dom, defaults, options;
		dom = $(this);
		defaults = {
			eventName: 'earthquake'
		};
		options = $.extend(defaults, config);

		// 関数設定
		function changeDom() {
			dom.trigger(options.eventName);
		}

		function earthquake() {
			if (typeof MutationObserver === 'function') {
				var mo = new MutationObserver(changeDom);
				mo.observe(
					dom[0],
					{
						childList: true,
						subtree: true
					}
				);
			} else {
				dom.on('DOMSubtreeModified', function () {
					changeDom();
				});
			}
		}

		// 実行
		earthquake();
	};
}(jQuery));
