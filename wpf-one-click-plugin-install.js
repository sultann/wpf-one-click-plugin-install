
;(function ($) {
    $(document).ready(function () {
        'use strict';
        console.log('working');
        var all_plugins = $('.plugin-action-buttons .install-now');

        all_plugins.text('Install & Activate');
        all_plugins.on('click', function () {

        });

        all_plugins.each(function () {
            $(this).watch({
                properties: "attr_class",

                // callback function when a change is detected
                callback: function(data, i) {
                   // var propChanged = data.props[i];
                    //var newValue = data.vals[i];
                    // var el = this;
                    var $el = $(this);
                    if($el.hasClass('activate-now')){
                        var link = $el.attr('href');
                        $.get(link, function(data, status){
                            if(status == 'success'){
                                var button = '<button type="button" class="button button-disabled" disabled="disabled">Active</button>';
                                $el.replaceWith(button);
                            }
                        });

                    }
                }
            });
        });

    });
})(jQuery);
