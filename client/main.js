var UIBlocker = (function() {
  function UIBlocker() {
    this.isBlocked = false;
    this.templateInstance = false;
    this.message = new ReactiveVar(false);
    this.open = new ReactiveVar(false);
  }

  UIBlocker.prototype.block = function(message) {
    if (message == null) {
      message = false;
    }
    this.isBlocked = true;
    this.open.set(true);
    if (message) {
      this.message.set(message);
    }
    if (this.templateInstance) {
      Blaze.remove(this.templateInstance);
    }
    if ($('body')[0]) {
      this.templateInstance = Blaze.render(Template.UIBlock, $('body')[0]);
    }
    $('html').addClass('UIBlocked');
  };

  UIBlocker.prototype.unblock = function() {
    this.isBlocked = false;
    this.open.set(false);
    this.message.set(false);
    if (this.templateInstance) {
      Blaze.remove(this.templateInstance);
    }
    $('html').removeClass('UIBlocked');
  };

  return UIBlocker;

})();

UIBlock = new UIBlocker;

Template.UIBlock.helpers({
  blocked: function() {
    return UIBlock.open.get();
  },
  message: function() {
    return UIBlock.message.get();
  }
});