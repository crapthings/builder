// import { MeteorDataContainer as MDC } from '/imports/react-meteor-api'

global._ = require('lodash')

global.Moment = global.moment = require('moment')

global.Faker = global.faker = require('faker')

global.React = require('react')

global.Component = require('react').Component

global.TrackerContainer = global.Container = require('react-komposer').composeWithTracker

// global.MeteorDataContainer = global.MDC

global.Mount = global.mount = require('react-mounter').mount

global.Form2js = global.form2js = require('form2js').form2js

global.Subs = new SubsManager()

global.App = {
  collections: {},
  components: {},
  routesExist: [],
}
