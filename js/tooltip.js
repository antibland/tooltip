$(document).ready(function() {
  $.fn.tooltip = function() {
    return this.each(function() {
      var $tooltip_message = $("<div class='tooltip-message'></div"),
          changeTipPosition = function(event, action) {
            var xPos, yPos, $target;

            if (action === "keyboard") {
              $target = $(event.target);
              xPos = $target.offset().left;
              yPos = $target.offset().top + 25;
            } else {
              xPos = event.pageX;
              yPos = event.pageY;
            }

            $tooltip_message.css({
              top: yPos + "px",
              left: xPos + "px"
            });
          },
          showTip = function(event, action) {
            $target = action === "keyboard" ? $(event.target) : $(this);
            var tooltip_content = $target.attr("data-tooltip-content");
            hideTip();
            setTipContent(tooltip_content);
            changeTipPosition(event, action);
          },
          hideTip = function() {
            $(".tooltip-message").remove();
          },
          setTipContent = function(tooltip_content) {
            $tooltip_message
              .html(tooltip_content)
              .appendTo('body');
          };

      $(this).on({
        mousemove: changeTipPosition,
        mouseenter: showTip,
        focus: function() {
          showTip(event, 'keyboard');
        },
        mouseleave: hideTip,
        blur: hideTip
      });
    });
  };
});
