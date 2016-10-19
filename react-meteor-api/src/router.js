import { Meteor } from 'meteor/meteor'

import { FlowRouter } from 'meteor/kadira:flow-router'

import { mount as Mount} from 'react-mounter'

import { _ } from 'lodash'

export const MeteorRouter = (path, options) => {

  if (!path)
    throw new Error('first argument is missing, it looks like "/" or "/home" etc...')

  if (Meteor.isClient
    && !options.layout
    && !_.has(window, 'RMAConfig.defaultLayout')
  )
    throw new Error('you need a layout that should be attached to RMAConfig.defaultLayout.')

  const layout = options.layout || window.RMAConfig.defaultLayout

  if (!options.component)
    throw new Error('you need a component as property.')

  const { component } = options

  const FlowRouterOptions = { action () { Mount(layout, { component }) }, ...options }

  FlowRouter.route(path, FlowRouterOptions)

}
