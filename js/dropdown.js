function DropDown(el) {
  this.dd = el;
  this.placeholder = this.dd.children('span');
  this.opts = this.dd.find('ul.dropdown > li');
  this.val = '';
  this.index = -1;
  this.initEvents();
}
DropDown.prototype = {
  initEvents : function() {
      var obj = this;

      obj.dd.on('click', function(event){
          // Set dropdown position to wherever the link is
          $('#featured-funds-dropdown').toggleClass('active');

          return false;
      });
  },
  getValue : function() {
      return this.val;
  },
  getIndex : function() {
      return this.index;
  }
}