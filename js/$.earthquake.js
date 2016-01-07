/*global jQuery, MutationObserver */
(function ($) {
    $.fn.earthquake = function (config) {
        // 変数設定
        var dom = $(this);
        var setting = {
            eventName: 'earthquake'
        };

        // 関数設定
        function earthquake() {
            if (typeof MutationObserver === 'function') {
                var mo = new MutationObserver(changeDom);
                mo.observe(
                    dom[0], {
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

        function changeDom () {
            dom.trigger(setting.eventName);
        }

        // 実行
        earthquake();
    };
})(jQuery);
