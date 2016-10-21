const data = {
  core () {
    return App.core.findOne({ core: true })
  }
}

const index = (props) => <MeteorDataContainer { ...props } sources={{ data, }} component={({ core, params, location, ...props, }) => {
  const pages = core.collections
  const page = _.find(pages, { _id: params._id })
  return <div>{page.name}</div>
}} />

export default index
