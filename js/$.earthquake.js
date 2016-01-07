/*global jQuery, MutationObserver */
(function ($) {
    $.fn.earthquake = function (config) {
        var dom = $(this);
        var setting = {
            eventName: 'earthquake'
        };

        earthquake();

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

    };
})(jQuery);
