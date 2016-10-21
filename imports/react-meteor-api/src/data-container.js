// todos
// [ ] debug tool
// [ ] cache options through props
// [ ] life cycle

import { Meteor } from 'meteor/meteor'

import { SubsManager } from 'meteor/meteorhacks:subs-manager'

import { composeWithTracker as ComposeDataContainer } from 'react-komposer'

import { map, mapValues, every, isFunction } from 'lodash'

export const MeteorDataContainer = ({ sources, component, ...options }) => {

  const _data = sources.data
  const _subscriptions = sources.subscriptions || [true]

  const Subscribe = !options.cache ? Meteor.subscribe : new SubsManager().subscribe

  function defaultTracker(props, onData) {
    const _loaded = map(_subscriptions, (val, key) => Subscribe(key, ...val).ready())
    const data = mapValues(_data, (val) => isFunction(val) ? val() : val)
    every(_loaded) && onData(null, data)
  }

  const DataContainer = ComposeDataContainer(defaultTracker)(component)

  return new DataContainer()
}
