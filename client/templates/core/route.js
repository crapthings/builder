import layout from '../layout'

import Index from './index'

FlowRouter.route('/core', {
  action() {
    Mount(layout, {
      content: (props) => <Index {...props} />
    })
  }
})
