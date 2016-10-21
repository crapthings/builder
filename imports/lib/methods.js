exports.initCollections = function (core) {
  _.each(core.collections, core => {
    if (!App.collections[core._id])
      App.collections[core._id] = new Mongo.Collection(core._id)
  })
}
