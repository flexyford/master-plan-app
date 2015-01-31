define('master-plan-app/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].ActiveModelAdapter.extend({
    host: "http://rsvpeanut.herokuapp.com",
    headers: {
      Accept: "application/json, text/html, text/javascript"
    }
  });

});
define('master-plan-app/adapters/event', ['exports', './application'], function (exports, ApplicationAdapter) {

	'use strict';

	exports['default'] = ApplicationAdapter['default'].extend({});

});
define('master-plan-app/adapters/user', ['exports', './application'], function (exports, ApplicationAdapter) {

	'use strict';

	exports['default'] = ApplicationAdapter['default'].extend({});

});
define('master-plan-app/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', './config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('master-plan-app/components/about-section', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: ["section"],
    classNames: ["team-section"],

    aboutImageUrl: "http://placehold.it/400x300&text=[img]",

    aboutTiles: [{
      id: 1,
      text: "see all your events on a map",
      img: "http://placehold.it/400x300&text=[img]"
    }, {
      id: 2,
      text: "filter your events to create a custom map",
      img: "http://placehold.it/400x300&text=[img]"
    }, {
      id: 3,
      text: "view your plan",
      img: "http://placehold.it/400x300&text=[img]"
    }]
  });

});
define('master-plan-app/components/anchor-link', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: "a",

    attributeBindings: ["hrefAnchorTag:href"],

    hrefAnchorTag: (function () {
      var customHref = this.get("customHref");
      return customHref ? "#" + customHref : "#";
    }).property("customHref")

  });

});
define('master-plan-app/components/fixed-nav-bar', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: "nav",
    classNames: ["fixed-nav-bar"]
  });

});
define('master-plan-app/components/footer-wrap', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: ["footer-wrap"]

  });

});
define('master-plan-app/components/form-field', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({});

});
define('master-plan-app/components/foundation-row-wrapper', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: ["row"],

    containerSizes: (function () {
      return this.get("divSubClassNames");
    }).property("divSubClassNames")
  });

});
define('master-plan-app/components/hero-wrapper', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: "div",
    classNames: ["hero"],

    baseImageUrl: "assets/images",

    heroImage: true,

    heroButtons: [{
      id: 1,
      "class": "button large",
      attrId: "hero-button1",
      content: "Get Started",
      anchor: "start"
    }, {
      id: 2,
      "class": "button large",
      attrId: "hero-button2",
      content: "Learn More",
      anchor: "learn"
    }],

    heroUrl: (function () {
      return this.get("baseImageUrl") + "/sxsw6.png";
    }).property("baseImageUrl")

  });

});
define('master-plan-app/components/learn-section', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: "section",
    classNames: ["learn-section"],

    baseImageUrl: "assets/images",

    learnImageUrl: (function () {
      return this.get("baseImageUrl") + "/strava-ex.jpg";
    }).property("baseImageUrl")

  });

});
define('master-plan-app/components/team-section', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: ["section"],
    classNames: ["about-section"],

    teamMembers: [{
      id: 1,
      name: "Alex Ford",
      role: "Front-End",
      img: "assets/images/alex.jpg"
    }, {
      id: 2,
      name: "Jessica Meyer",
      role: "Front-End",
      img: "assets/images/jessica.jpg"
    }, {
      id: 3,
      name: "John Goldsmith",
      role: "Back-End",
      img: "assets/images/john.jpg"
    }, {
      id: 4,
      name: "Melizza Patterson",
      role: "Back-End",
      img: "assets/images/melissa.jpeg"
    }, {
      id: 5,
      name: "Spenser Filler",
      role: "Back-End",
      img: "assets/images/spenser.jpeg"
    }]
  });

});
define('master-plan-app/components/user-info', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: "li",

    classNames: ["user-info"],

    isDisplayed: false,

    actions: {
      toggleBody: function () {
        this.toggleProperty("isDisplayed");
      } }
  });

});
define('master-plan-app/controllers/users/new', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    actions: {
      createUser: function () {
        debugger;
        var user = this.store.createRecord("user");
        user.set("first", this.get("first"));
        user.set("last", this.get("last"));
        user.set("email", this.get("email"));
        user.set("password", this.get("password"));

        user.save().then(function () {
          alert("User was saved!");
        })["catch"](function () {
          alert("User had an error");
        });
      }
    }
  });

});
define('master-plan-app/initializers/export-application-global', ['exports', 'ember', '../config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('master-plan-app/models/event', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('master-plan-app/models/itinerary', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('master-plan-app/models/user', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    email: DS['default'].attr("string"),
    password: DS['default'].attr("string"),
    first: DS['default'].attr("string"),
    last: DS['default'].attr("string"),
    created_at: DS['default'].attr("date"),
    updated_at: DS['default'].attr("date")
  });

});
define('master-plan-app/router', ['exports', 'ember', './config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route("events", function () {
      this.route("event", {
        path: ":event_id"
      });
    });
    this.route("users", function () {
      this.route("user", {
        path: ":user_id"
      });
      this.route("new");
    });
    this.route("itinerary");
  });

  exports['default'] = Router;

});
define('master-plan-app/routes/events', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function () {
      return this.store.find("event");
    }
  });

});
define('master-plan-app/routes/events/event', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function (params) {
      return this.store.find("event", params.event_id);
    }
  });

});
define('master-plan-app/routes/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('master-plan-app/routes/itinerary', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('master-plan-app/routes/plans', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('master-plan-app/routes/users', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function () {
      return this.store.find("user");
    },

    setupController: function (controller, model) {
      controller.set("users", model.content);
    },

    renderTemplate: function () {
      this._super();
      this.render("users/new", {
        into: "users",
        controller: "users.new"
      });
    }
  });

});
define('master-plan-app/routes/users/new', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function () {}
  });

});
define('master-plan-app/routes/users/user', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function (params) {
      return this.store.find("user", params.event_id);
    },

    actions: {
      update: function () {
        this.get("currentModel").save();
      }
    }
  });

});
define('master-plan-app/serializers/application', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].ActiveModelSerializer.extend({
    attrs: {
      created_at: { serialize: false },
      updated_at: { serialize: false }
    }
  });

});
define('master-plan-app/templates/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <div class=\"logo-section\"> \n\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    <div class=\"nav-buttons\">\n      ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("button radius signin-button")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "events", options) : helperMissing.call(depth0, "link-to", "events", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n      ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("button radius signin-button")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n      ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("button radius signin-button")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n      ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("button radius signin-button")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n\n  </div>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    
    data.buffer.push("\n      <img src=\"assets/images/peanutlogo.png\" class=\"peanutlogo\"></img>\n    ");
    }

  function program4(depth0,data) {
    
    
    data.buffer.push("EVENTS");
    }

  function program6(depth0,data) {
    
    
    data.buffer.push("TEAM");
    }

  function program8(depth0,data) {
    
    
    data.buffer.push("SIGN IN");
    }

  function program10(depth0,data) {
    
    
    data.buffer.push("SIGN UP");
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['fixed-nav-bar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['fixed-nav-bar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['fixed-nav-bar']) { stack1 = blockHelperMissing.call(depth0, 'fixed-nav-bar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/components/about-section', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <div ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":large-4 :columns")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" >\n      <img ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'src': ("tile.img")
    },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" />\n      <p ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":step-text")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">\n      	");
    stack1 = helpers._triageMustache.call(depth0, "tile.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n      </p>\n    </div>\n  ");
    return buffer;
    }

    data.buffer.push("<div class=\"row\">\n  ");
    stack1 = helpers.each.call(depth0, "tile", "in", "aboutTiles", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/components/anchor-link', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var stack1;


    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    else { data.buffer.push(''); }
    
  });

});
define('master-plan-app/templates/components/fixed-nav-bar', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/components/footer-wrap', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("    \n  <p class=\"copyright\">© Copyright RSVPeanut </p>\n");
    }

    data.buffer.push("<!--footer-->\n");
    stack1 = (helper = helpers['foundation-row-wrapper'] || (depth0 && depth0['foundation-row-wrapper']),options={hash:{
      'tagName': ("footer"),
      'divSubClassNames': ("large-12 columns")
    },hashTypes:{'tagName': "STRING",'divSubClassNames': "STRING"},hashContexts:{'tagName': depth0,'divSubClassNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "foundation-row-wrapper", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/components/form-field', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


    data.buffer.push("<div class=\"form-group\">\n  <label ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'for': ("label")
    },hashTypes:{'for': "ID"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</label>\n  ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'type': ("type"),
      'value': ("value"),
      'id': ("label"),
      'class': ("form-control")
    },hashTypes:{'type': "ID",'value': "ID",'id': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/components/foundation-row-wrapper', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression;


    data.buffer.push("<div ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("containerSizes")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" >\n  ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n<div>\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/components/hero-wrapper', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['anchor-link'] || (depth0 && depth0['anchor-link']),options={hash:{
      'class': ("button.class"),
      'id': ("button.attrId"),
      'customHref': ("button.anchor")
    },hashTypes:{'class': "ID",'id': "ID",'customHref': "ID"},hashContexts:{'class': depth0,'id': depth0,'customHref': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "anchor-link", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  ");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n      ");
    stack1 = helpers._triageMustache.call(depth0, "button.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    return buffer;
    }

    data.buffer.push("<img ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'src': ("heroUrl")
    },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("heroImage")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" />\n<h2 ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":hero-title")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">\n  Find Event In Your City </h2>\n<h3 ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":hero-text")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push("> \n  Check Out New Events. Map Your Scene. Explore. </h3>\n\n<div ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":hero-buttons")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" >\n  ");
    stack1 = helpers.each.call(depth0, "button", "in", "heroButtons", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/components/learn-section', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', escapeExpression=this.escapeExpression;


    data.buffer.push("<!-- learn more section -->\n<h3 ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":section-title")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push("> See All Of Your Events In One Place </h3>\n<center>\n  <img ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'src': ("learnImageUrl")
    },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":example-image")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" />\n</center>\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/components/team-section', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n      <div class=\"large-2 columns\">\n        <img ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":teampic"),
      'src': ("member.img")
    },hashTypes:{'class': "STRING",'src': "STRING"},hashContexts:{'class': depth0,'src': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" />\n        <p class=\"about-text\"> ");
    stack1 = helpers._triageMustache.call(depth0, "member.role", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push(" </p>\n      </div>\n    ");
    return buffer;
    }

    data.buffer.push("<h3 class=\"section-title\"> Meet Our Developers </h3>\n<div class=\"team-pad\">\n  <div class=\"row\">\n    <div class=\"large-1 columns\"></div>\n    ");
    stack1 = helpers.each.call(depth0, "member", "in", "teamMembers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <div class=\"large-1 columns\"></div>\n  </div>\n</div>\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/components/user-info', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <span><em><strong>");
    stack1 = helpers._triageMustache.call(depth0, "user.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</strong></em></span>\n  ");
    return buffer;
    }

    data.buffer.push("<a ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
    data.buffer.push(">\n  <h3>");
    stack1 = helpers._triageMustache.call(depth0, "user.first", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</h3>\n  ");
    stack1 = helpers['if'].call(depth0, "isDisplayed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</a>");
    return buffer;
    
  });

});
define('master-plan-app/templates/events', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n        <li class=\"singleEventListItem\">\n            ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'tagName': ("h3")
    },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "events.event", "event", options) : helperMissing.call(depth0, "link-to", "events.event", "event", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n          <!-- ");
    stack1 = helpers._triageMustache.call(depth0, "user-info", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push(" -->\n        </li>\n      ");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n              ");
    stack1 = helpers._triageMustache.call(depth0, "event.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n            ");
    return buffer;
    }

    data.buffer.push("<div class=\"pageClass\">\n  <section class=\"eventSection cf\">\n    <br><br><br>\n    <h2>Events</h2>\n    <div>\n      There are currently <strong><em>");
    stack1 = helpers._triageMustache.call(depth0, "events.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</em></strong> events in our dummy db\n    </div>\n    <ul class=\"singleEventList cf\">\n      ");
    stack1 = helpers.each.call(depth0, "event", "in", "events", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </ul>\n  </section>\n</div>\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/events/event', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    data.buffer.push("<article class=\"singleEventContent\">\n  <span><em>itza <strong>");
    stack1 = helpers._triageMustache.call(depth0, "event.event_type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</strong> at ");
    stack1 = helpers._triageMustache.call(depth0, "event.location", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</em></span>\n</article>");
    return buffer;
    
  });

});
define('master-plan-app/templates/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("    \n  ");
    stack1 = helpers._triageMustache.call(depth0, "learn-section", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    }

    data.buffer.push("<!-- index -->\n");
    data.buffer.push(escapeExpression((helper = helpers['hero-wrapper'] || (depth0 && depth0['hero-wrapper']),options={hash:{
      'buttons': ("heroButtons")
    },hashTypes:{'buttons': "ID"},hashContexts:{'buttons': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "hero-wrapper", options))));
    data.buffer.push("\n");
    stack1 = (helper = helpers['foundation-row-wrapper'] || (depth0 && depth0['foundation-row-wrapper']),options={hash:{
      'divSubClassNames': ("large-12 columns")
    },hashTypes:{'divSubClassNames': "STRING"},hashContexts:{'divSubClassNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "foundation-row-wrapper", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    stack1 = helpers._triageMustache.call(depth0, "about-section", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    stack1 = helpers._triageMustache.call(depth0, "team-section", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    stack1 = helpers._triageMustache.call(depth0, "footer-wrap", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/itinerary', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/plans', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('master-plan-app/templates/users', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n        ");
    data.buffer.push(escapeExpression((helper = helpers['user-info'] || (depth0 && depth0['user-info']),options={hash:{
      'user': ("user")
    },hashTypes:{'user': "ID"},hashContexts:{'user': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-info", options))));
    data.buffer.push("\n      ");
    return buffer;
    }

    data.buffer.push("<div class=\"pageClass\">\n  ");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  <section class=\"userSection clearfix\">\n    <br>\n    <h2>Users</h2>\n    <div>\n      There are currently <strong><em>");
    stack1 = helpers._triageMustache.call(depth0, "users.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</em></strong> users in our dummy db\n    </div>\n    <ul class=\"singleUserList clearfix\">\n      ");
    stack1 = helpers.each.call(depth0, "user", "in", "users", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </ul>\n  </section>\n</div>");
    return buffer;
    
  });

});
define('master-plan-app/templates/users/new', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


    data.buffer.push("<div class=\"container\">\n  <form ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "createUser", "model", {hash:{
      'on': ("submit")
    },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
    data.buffer.push(">\n    <br><br><br>\n    <h2>Create User</h2>\n\n    <h4>First Name\"<h4>\n    ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'type': ("text"),
      'value': ("first"),
      'id': ("First Name"),
      'class': ("form-control")
    },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n    <h4>Last Name\"<h4>\n    ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'type': ("text"),
      'value': ("last"),
      'id': ("Last Name"),
      'class': ("form-control")
    },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n    <h4>Email\"<h4>\n    ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'type': ("text"),
      'value': ("email"),
      'id': ("Email"),
      'class': ("form-control")
    },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n    <h4>Password\"<h4>\n    ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'type': ("password"),
      'value': ("password"),
      'id': ("Password"),
      'class': ("form-control")
    },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n\n    <button class=\"btn btn-primary btn-block\" type=\"submit\">Submit</button>\n\n  </form>\n</div>");
    return buffer;
    
  });

});
define('master-plan-app/templates/users/user', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    data.buffer.push("<article class=\"singleUserContent\">\n  <span><em><strong>");
    stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</strong></em></span>\n</article>\n");
    return buffer;
    
  });

});
define('master-plan-app/tests/acceptance/index-test', ['ember', '../helpers/start-app'], function (Ember, startApp) {

  'use strict';

  var application;

  module("Acceptance: Index", {
    setup: function () {
      application = startApp['default']();
    },
    teardown: function () {
      Ember['default'].run(application, "destroy");
    }
  });

  test("visiting /index", function () {
    visit("/index");

    andThen(function () {
      equal(currentPath(), "index");
    });
  });

});
define('master-plan-app/tests/adapters/application.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function() { 
    ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/adapters/event.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/event.js should pass jshint', function() { 
    ok(true, 'adapters/event.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/adapters/user.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/user.js should pass jshint', function() { 
    ok(true, 'adapters/user.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/components/about-section.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/about-section.js should pass jshint', function() { 
    ok(true, 'components/about-section.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/components/anchor-link.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/anchor-link.js should pass jshint', function() { 
    ok(true, 'components/anchor-link.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/components/fixed-nav-bar.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/fixed-nav-bar.js should pass jshint', function() { 
    ok(true, 'components/fixed-nav-bar.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/components/footer-wrap.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/footer-wrap.js should pass jshint', function() { 
    ok(true, 'components/footer-wrap.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/components/form-field.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/form-field.js should pass jshint', function() { 
    ok(true, 'components/form-field.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/components/foundation-row-wrapper.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/foundation-row-wrapper.js should pass jshint', function() { 
    ok(true, 'components/foundation-row-wrapper.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/components/hero-wrapper.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/hero-wrapper.js should pass jshint', function() { 
    ok(true, 'components/hero-wrapper.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/components/learn-section.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/learn-section.js should pass jshint', function() { 
    ok(true, 'components/learn-section.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/components/team-section.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/team-section.js should pass jshint', function() { 
    ok(true, 'components/team-section.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/components/user-info.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/user-info.js should pass jshint', function() { 
    ok(true, 'components/user-info.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/controllers/users/new.jshint', function () {

  'use strict';

  module('JSHint - controllers/users');
  test('controllers/users/new.js should pass jshint', function() { 
    ok(false, 'controllers/users/new.js should pass jshint.\ncontrollers/users/new.js: line 6, col 7, Forgotten \'debugger\' statement?\n\n1 error'); 
  });

});
define('master-plan-app/tests/helpers/resolver', ['exports', 'ember/resolver', '../../config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('master-plan-app/tests/helpers/start-app', ['exports', 'ember', '../../app', '../../router', '../../config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';

  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
  exports['default'] = startApp;

});
define('master-plan-app/tests/master-plan-app/tests/acceptance/index-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/acceptance');
  test('master-plan-app/tests/acceptance/index-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/acceptance/index-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/helpers');
  test('master-plan-app/tests/helpers/resolver.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/helpers/resolver.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/helpers');
  test('master-plan-app/tests/helpers/start-app.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/helpers/start-app.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests');
  test('master-plan-app/tests/test-helper.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/test-helper.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/adapters/application-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/adapters');
  test('master-plan-app/tests/unit/adapters/application-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/adapters/application-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/adapters/event-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/adapters');
  test('master-plan-app/tests/unit/adapters/event-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/adapters/event-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/adapters/user-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/adapters');
  test('master-plan-app/tests/unit/adapters/user-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/adapters/user-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/components/about-section-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/components');
  test('master-plan-app/tests/unit/components/about-section-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/components/about-section-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/components/anchor-link-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/components');
  test('master-plan-app/tests/unit/components/anchor-link-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/components/anchor-link-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/components/fixed-nav-bar-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/components');
  test('master-plan-app/tests/unit/components/fixed-nav-bar-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/components/fixed-nav-bar-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/components/footer-wrap-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/components');
  test('master-plan-app/tests/unit/components/footer-wrap-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/components/footer-wrap-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/components/form-field-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/components');
  test('master-plan-app/tests/unit/components/form-field-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/components/form-field-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/components/foundation-row-wrapper-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/components');
  test('master-plan-app/tests/unit/components/foundation-row-wrapper-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/components/foundation-row-wrapper-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/components/hero-wrapper-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/components');
  test('master-plan-app/tests/unit/components/hero-wrapper-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/components/hero-wrapper-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/components/learn-section-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/components');
  test('master-plan-app/tests/unit/components/learn-section-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/components/learn-section-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/components/team-section-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/components');
  test('master-plan-app/tests/unit/components/team-section-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/components/team-section-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/components/user-info-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/components');
  test('master-plan-app/tests/unit/components/user-info-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/components/user-info-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/controllers/users/new-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/controllers/users');
  test('master-plan-app/tests/unit/controllers/users/new-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/controllers/users/new-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/models/event-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/models');
  test('master-plan-app/tests/unit/models/event-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/models/event-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/models/itinerary-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/models');
  test('master-plan-app/tests/unit/models/itinerary-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/models/itinerary-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/models/user-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/models');
  test('master-plan-app/tests/unit/models/user-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/models/user-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/routes/events-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/routes');
  test('master-plan-app/tests/unit/routes/events-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/routes/events-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/routes/events/event-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/routes/events');
  test('master-plan-app/tests/unit/routes/events/event-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/routes/events/event-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/routes/index-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/routes');
  test('master-plan-app/tests/unit/routes/index-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/routes/index-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/routes/itinerary-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/routes');
  test('master-plan-app/tests/unit/routes/itinerary-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/routes/itinerary-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/routes/plans-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/routes');
  test('master-plan-app/tests/unit/routes/plans-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/routes/plans-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/routes/users-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/routes');
  test('master-plan-app/tests/unit/routes/users-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/routes/users-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/routes/users/new-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/routes/users');
  test('master-plan-app/tests/unit/routes/users/new-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/routes/users/new-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/routes/users/user-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/routes/users');
  test('master-plan-app/tests/unit/routes/users/user-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/routes/users/user-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/master-plan-app/tests/unit/serializers/application-test.jshint', function () {

  'use strict';

  module('JSHint - master-plan-app/tests/unit/serializers');
  test('master-plan-app/tests/unit/serializers/application-test.js should pass jshint', function() { 
    ok(true, 'master-plan-app/tests/unit/serializers/application-test.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/models/event.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/event.js should pass jshint', function() { 
    ok(true, 'models/event.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/models/itinerary.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/itinerary.js should pass jshint', function() { 
    ok(true, 'models/itinerary.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/models/user.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/user.js should pass jshint', function() { 
    ok(true, 'models/user.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/routes/events.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/events.js should pass jshint', function() { 
    ok(true, 'routes/events.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/routes/events/event.jshint', function () {

  'use strict';

  module('JSHint - routes/events');
  test('routes/events/event.js should pass jshint', function() { 
    ok(true, 'routes/events/event.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/routes/index.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/index.js should pass jshint', function() { 
    ok(true, 'routes/index.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/routes/itinerary.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/itinerary.js should pass jshint', function() { 
    ok(true, 'routes/itinerary.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/routes/plans.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/plans.js should pass jshint', function() { 
    ok(true, 'routes/plans.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/routes/users.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/users.js should pass jshint', function() { 
    ok(true, 'routes/users.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/routes/users/new.jshint', function () {

  'use strict';

  module('JSHint - routes/users');
  test('routes/users/new.js should pass jshint', function() { 
    ok(true, 'routes/users/new.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/routes/users/user.jshint', function () {

  'use strict';

  module('JSHint - routes/users');
  test('routes/users/user.js should pass jshint', function() { 
    ok(true, 'routes/users/user.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/serializers/application.jshint', function () {

  'use strict';

  module('JSHint - serializers');
  test('serializers/application.js should pass jshint', function() { 
    ok(true, 'serializers/application.js should pass jshint.'); 
  });

});
define('master-plan-app/tests/test-helper', ['./helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

	document.write("<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>");

	QUnit.config.urlConfig.push({ id: "nocontainer", label: "Hide container" });
	var containerVisibility = QUnit.urlParams.nocontainer ? "hidden" : "visible";
	document.getElementById("ember-testing-container").style.visibility = containerVisibility;

});
define('master-plan-app/tests/unit/adapters/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("adapter:application", "ApplicationAdapter", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var adapter = this.subject();
    ok(adapter);
  });
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('master-plan-app/tests/unit/adapters/event-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("adapter:event", "EventAdapter", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var adapter = this.subject();
    ok(adapter);
  });
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('master-plan-app/tests/unit/adapters/user-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("adapter:user", "UserAdapter", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var adapter = this.subject();
    ok(adapter);
  });
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('master-plan-app/tests/unit/components/about-section-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("about-section", "AboutSectionComponent", {});

  ember_qunit.test("it renders", function () {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, "preRender");

    // appends the component to the page
    this.append();
    equal(component._state, "inDOM");
  });
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('master-plan-app/tests/unit/components/anchor-link-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("anchor-link", "AnchorLinkComponent", {});

  ember_qunit.test("it renders", function () {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, "preRender");

    // appends the component to the page
    this.append();
    equal(component._state, "inDOM");
  });
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('master-plan-app/tests/unit/components/fixed-nav-bar-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("fixed-nav-bar", "FixedNavBarComponent", {});

  ember_qunit.test("it renders", function () {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, "preRender");

    // appends the component to the page
    this.append();
    equal(component._state, "inDOM");
  });
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('master-plan-app/tests/unit/components/footer-wrap-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("footer-wrap", "FooterWrapComponent", {});

  ember_qunit.test("it renders", function () {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, "preRender");

    // appends the component to the page
    this.append();
    equal(component._state, "inDOM");
  });
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('master-plan-app/tests/unit/components/form-field-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("form-field", "FormFieldComponent", {});

  ember_qunit.test("it renders", function () {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, "preRender");

    // appends the component to the page
    this.append();
    equal(component._state, "inDOM");
  });
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('master-plan-app/tests/unit/components/foundation-row-wrapper-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("foundation-row-wrapper", "FoundationRowWrapperComponent", {});

  ember_qunit.test("it renders", function () {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, "preRender");

    // appends the component to the page
    this.append();
    equal(component._state, "inDOM");
  });
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('master-plan-app/tests/unit/components/hero-wrapper-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("hero-wrapper", "HeroWrapperComponent", {});

  ember_qunit.test("it renders", function () {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, "preRender");

    // appends the component to the page
    this.append();
    equal(component._state, "inDOM");
  });
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('master-plan-app/tests/unit/components/learn-section-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("learn-section", "LearnSectionComponent", {});

  ember_qunit.test("it renders", function () {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, "preRender");

    // appends the component to the page
    this.append();
    equal(component._state, "inDOM");
  });
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('master-plan-app/tests/unit/components/team-section-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("team-section", "TeamSectionComponent", {});

  ember_qunit.test("it renders", function () {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, "preRender");

    // appends the component to the page
    this.append();
    equal(component._state, "inDOM");
  });
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('master-plan-app/tests/unit/components/user-info-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("user-info", "UserInfoComponent", {});

  ember_qunit.test("it renders", function () {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, "preRender");

    // appends the component to the page
    this.append();
    equal(component._state, "inDOM");
  });
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('master-plan-app/tests/unit/controllers/users/new-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:users/new", "UsersNewController", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var controller = this.subject();
    ok(controller);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('master-plan-app/tests/unit/models/event-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("event", "Event", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function () {
    var model = this.subject();
    // var store = this.store();
    ok(!!model);
  });

});
define('master-plan-app/tests/unit/models/itinerary-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("itinerary", "Itinerary", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function () {
    var model = this.subject();
    // var store = this.store();
    ok(!!model);
  });

});
define('master-plan-app/tests/unit/models/user-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("user", "User", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function () {
    var model = this.subject();
    // var store = this.store();
    ok(!!model);
  });

});
define('master-plan-app/tests/unit/routes/events-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:events", "EventsRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('master-plan-app/tests/unit/routes/events/event-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:events/event", "EventsEventRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('master-plan-app/tests/unit/routes/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:index", "IndexRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('master-plan-app/tests/unit/routes/itinerary-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:itinerary", "ItineraryRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('master-plan-app/tests/unit/routes/plans-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:plans", "PlansRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('master-plan-app/tests/unit/routes/users-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:users", "UsersRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('master-plan-app/tests/unit/routes/users/new-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:users/new", "UsersNewRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('master-plan-app/tests/unit/routes/users/user-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:users/user", "UsersUserRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('master-plan-app/tests/unit/serializers/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("serializer:application", "ApplicationSerializer", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var serializer = this.subject();
    ok(serializer);
  });
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
/* jshint ignore:start */

define('master-plan-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'master-plan-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("master-plan-app/tests/test-helper");
} else {
  require("master-plan-app/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=master-plan-app.map