import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "div",
  classNames: ['hero'],

  baseImageUrl: "assets/images",

  heroImage: true,

  heroButtons:[ {
      "id": 1,
      "class": "button large",
      "attrId": "hero-button1",
      "content": "Get Started",
      "anchor": "#start"
    }, {
      "id": 2,
      "class":  "button large",
      "attrId": "hero-button2",
      "content": "Learn More",
      "anchor": "#learn"
    } ],

  heroUrl: function(){
    return this.get('baseImageUrl') + "/sxsw6.png";
  }.property('baseImageUrl')

});
