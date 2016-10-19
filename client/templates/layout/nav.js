const index = ({ collections }) => {
  const home = { _id: Random.id(), name: 'home', path: '/' }
  const core = { _id: Random.id(), name: 'core' }
  const routes = [home, ...collections, core]
  return <div>
    <ul>
      {routes.map(({ _id, name, path }) => <li key={_id}>
        <a href={path ? path : `/${name}`}>{name}</a>
      </li>)}
    </ul>
    <h3>page</h3>
  </div>
}

export default index
