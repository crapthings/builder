const index = () => <form onSubmit={(e) => submit(e)}>

  <div>

    <button type='button' onClick={() => Meteor.call('core.collections.empty')}>empty collections</button>

  </div>

  <label className='block'>
    <span>名称</span>
    <input type="text" name='name' required />
  </label>

  <label className='block'>
    <span>描述</span>
    <input type="text" name='desc' />
  </label>

  <label className='block'>
    <span>路径</span>
    <input type="text" name='path' placeholder='不要加斜杠' />
  </label>

  <label className='block'>
    <span>is collection</span>
    <input type="checkbox" name='isCollection' defaultChecked='true' />
  </label>

  <label className='block'>
    <span>在导航显示？</span>
    <input type="checkbox" name='isNav' defaultChecked='true' />
  </label>

  <label className='block'>
    <input type="submit" />
  </label>

</form>

function submit(e) {
  e.preventDefault()
  const form = e.currentTarget
  const formId = form.id = Random.id()
  const opt = form2js(formId)
  opt._id = Random.id()
  Meteor.call('core.collections.add', opt, err => !err && form.reset())
}

export default index
