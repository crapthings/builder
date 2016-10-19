import Nav from './nav'

const index = ({ content, core }) => <div>
  <Nav {...core} />
  {content({ ...core })}
</div>

function tracker (props, onData) {
  const loaded = _.every([
    Meteor.subscribe('app.collections.core').ready(),
  ])

  const core = Core.findOne({ core: true })

  loaded && onData(null, { core, ...props })
}

export default Container(tracker)(index)
