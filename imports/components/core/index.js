import CoreForm from './form'

const index = ({ collections }) => <div>

  <CoreForm />

  {collections && collections.length && collections.map(({_id, name, path, ...collection}) => <div key={_id}>
    {name} {path}
  </div>)}

</div>

export default index
