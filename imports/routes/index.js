import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'

Meteor.startup(function () {

  const container = ($('<div id="app" />').appendTo('body'))[0]

  const tracker = function (props, onData) {
    const loaded = Meteor.subscribe('app.core').ready()
    if (loaded) {
      const collections = App.core.findOne().collections
      onData(null, { collections })
    }
  }

  const comp = ({ collections, ...props }) => {
    console.log(collections)
    const routes = <Route component={App.components.layout} collections={collections}>
      <Route path={`/`} component={App.components.home} collections={collections} />
      <Route path={`/collections/:_id`} component={App.components.collections} />
      <Route path="/core" component={App.components.core} />
    </Route>

    return <Router history={browserHistory}>
      {routes}
    </Router>
  }

  const Comp = Container(tracker)(comp)

  render(<Comp />, container)

})
