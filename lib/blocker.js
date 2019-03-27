export var UIBlocker = (function() {
  function UIBlocker() {
    this.isBlocked = false;
    this.message = new ReactiveVar(false);
    this.open = new ReactiveVar(false);
  }

  UIBlocker.prototype.block = function(message) {
    let messageString = ''
    if (message == null) {
      message = false;
    }
    this.isBlocked = true;
    this.open.set(true);
    if (message) {
      this.message.set(message);
      messageString = `<p class="message">${message}</p>`
    }
    if ($('body').find('#UIBlock').length) $('body').find('#UIBlock').remove()
    if ($('body')[0]) {
      $('body').append(`<div class="UIBlock" id="UIBlock">
      <div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div>
      ${messageString}
      </div></div>`)
    }
    $('html').addClass('UIBlocked');
  };

  UIBlocker.prototype.unblock = function() {
    this.isBlocked = false;
    this.open.set(false);
    this.message.set(false);
    // Remove
    if ($('body').find('#UIBlock').length) $('body').find('#UIBlock').remove()
    $('html').removeClass('UIBlocked');
  };

  return UIBlocker;

})();
