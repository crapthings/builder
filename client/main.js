import layout from './templates/layout'

import Page from './templates/layout/page'

Meteor.autorun(function () {
  const core = Core.findOne({ core: true })

  if (core) {
    core.collections && _.each(core.collections, c => {
      FlowRouter.route('/' + c.name, {
        action() {
          Mount(layout, {
            content: () => <Page title={c.name} />
          })
        }
      })
    })
  }
})
