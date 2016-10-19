const index = () => <form onSubmit={(e) => submit(e)}>
  <input type="text" name='name' />
  <input type="submit" />
</form>

function submit(e) {
  e.preventDefault()
  const form = e.currentTarget
  const formId = form.id = Random.id()
  const opt = form2js(formId)
  opt._id = Random.id()
  Meteor.call('core.collections.add', opt, err => !err && form.reset())
  console.log(Core.findOne({}))
}

export default index
