import { Link } from 'react-router'

const index = ({ collections, ...props }) => {
  console.log(props)
  return <div>
    <ul>
      <li>
        <Link to={`/`}>home</Link>
      </li>
      {collections.map(({ _id, name, path, isNav }) => isNav && <li key={_id}>
        <Link to={path ? `/collections/${path}?routeid=${_id}` : `/collections/${_id}`}>{name}</Link>
      </li>)}
      <li>
        <Link to={`/core`}>core</Link>
      </li>
    </ul>
  </div>
}

export default index
