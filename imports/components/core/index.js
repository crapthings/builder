import CoreForm from './form'

const data = {
  core () {
    console.log(App.core.findOne({ core: true }))
    return App.core.findOne({ core: true })
  }
}

const index = () => <div>
  <CoreForm />

  <MeteorDataContainer sources={{ data, }} component={({ core, }) => <div>
    {core.collections.map(({_id, name, path, ...collection}) => <div key={_id}>
      {name} {path}
    </div>)}
  </div>} />

</div>

export default index
