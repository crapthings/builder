require('./global')
require('./collections')
Meteor.isClient && require('./components')
Meteor.isClient && require('./routes')
