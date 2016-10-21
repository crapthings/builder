import { Link } from 'react-router'

const data = {
  core () {
    console.log(App.core.findOne({ core: true }))
    return App.core.findOne({ core: true })
  }
}

const index = () => <MeteorDataContainer sources={{ data, }} component={({ core, }) => <div>
    <ul>
      <li>
        <Link to={`/`}>home</Link>
      </li>
      {core.collections.map(({ _id, name, path, isNav }) => isNav && <li key={_id}>
        <Link to={path ? `/collections/${path}?routeid=${_id}` : `/collections/${_id}`}>{name}</Link>
      </li>)}
      <li>
        <Link to={`/core`}>core</Link>
      </li>
    </ul>
  </div>
} />

export default index
