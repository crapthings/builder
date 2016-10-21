import { initCollections } from '/imports/lib/methods'

const CORE_SELECTOR = { core: true }
const CORE_DEFAULT = _.extend(CORE_SELECTOR, { collections: [] })

const Core = App.core = new Mongo.Collection('app.core')

Core.after.update(function (userId, doc, fieldNames, modifier, options) {
  Meteor.isServer && initCollections(doc)
})

Meteor.methods({
  'core.collections.add' (opt) {
    Core.update(Core.findOne()._id, {
      $push: {
        collections: opt
      }
    })
  },

  'core.collections.empty' (opt) {
    Core.update(Core.findOne()._id, {
      $set: {
        collections: []
      }
    })

    App.collections = []
  }
})

Meteor.isServer && Meteor.publish('app.core', function () {
  return Core.find(CORE_SELECTOR)
})

Meteor.isServer && !Core.findOne(CORE_SELECTOR) && Core.insert(CORE_DEFAULT)
