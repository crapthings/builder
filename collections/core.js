const CORE_SELECTOR = { core: true }
const CORE_DEFAULT = _.extend(CORE_SELECTOR, { collections: [] })

Core = App.collections.core = new Mongo.Collection('app.collections.core')

Meteor.methods({
  'core.collections.add' (opt) {
    Core.update(Core.findOne()._id, {
      $push: {
        collections: opt
      }
    })
  }
})

Meteor.isServer && Meteor.publish('app.collections.core', function () {
  return Core.find(CORE_SELECTOR)
})

Meteor.isServer && Core.remove({})

Meteor.isServer && !Core.findOne(CORE_SELECTOR) && Core.insert(CORE_DEFAULT)
