import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'

Meteor.startup(function () {

  const container = ($('<div id="app" />').appendTo('body'))[0]

  const tracker = function (props, onData) {
    console.log('rerender')
    const loaded = Meteor.subscribe('app.core').ready()
    loaded && onData(null, {})
  }

  const comp = () => {
    const routes = <Route component={App.components.layout}>
      <Route path={`/`} component={App.components.home} />
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
