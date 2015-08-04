AntFarm.Ant = Class.extend({

  init: function(field) {
    this.id = field.getId();
    $('.field').append('<div class="ant ant-'+this.id+'"></div>');
    this.el = $('.ant-'+id);
    this.x = parseInt(Math.random()*field.width);
    this.y = parseInt(Math.random()*field.height);
    this.width = 10;
    this.height = 10;
    this.direction = Math.random()*360;
    this.color = "red";

    var ant = this;

    this.position = function() {
      // limit to bounds
      if (ant.x >= field.width)  ant.x = field.width;
      if (ant.y >= field.height) ant.y = field.height;
      if (ant.x <= 0) ant.x = 0;
      if (ant.y <= 0) ant.y = 0;
 
      // set position
      ant.el.css('left',ant.x-(ant.width/2)+'px');
      ant.el.css('top', ant.y-(ant.height/2)+'px');
      // webkit, e.g. chrome/safari
      ant.el.css({ WebkitTransform: 'rotate(' + -ant.direction + 'deg)'});
      // For Mozilla browser: e.g. Firefox
      ant.el.css({ '-moz-transform': 'rotate(' + -ant.direction + 'deg)'});

      ant.el.css('border-color',ant.color);
    }

    // rewriteability
    this.el.click(function(e){
      console.log(ant.run);
    });

  },

  run: function() {

    //this.x += Math.random()*2-1;
    //this.y += Math.random()*2-1;
    this.direction += Math.random()*4-2;
    this.x = this.x + Math.sin(this.direction/180*Math.PI)*1;
    this.y = this.y + Math.cos(this.direction/180*Math.PI)*1;

    field.darken(this.x,this.y,0,100);

  },

});