import CoreForm from './form'

const index = ({ collections }) => <div>
  {collections.map(({_id, name, ...collection}) => <div key={_id}>
    {name}
  </div>)}
  <CoreForm />
</div>

export default index
