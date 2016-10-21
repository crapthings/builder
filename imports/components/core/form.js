const index = () => <form onSubmit={(e) => submit(e)}>

  <div>
    <button type='button' onClick={() => Meteor.call('core.collections.empty')}>empty collections</button>
  </div>

  <label className='block'>
    <span>使用数据库</span>
    <input type="checkbox" name='isCollection' />
  </label>

  <label className='block'>
    <span>显示在导航</span>
    <input type="checkbox" name='isNav' />
  </label>

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
    <input type="submit" />
    <input type="reset" />
  </label>

</form>

function submit(e) {
  e.preventDefault()
  const form = e.currentTarget
  const formId = form.id = Random.id()
  const opt = form2js(formId)
  opt._id = Random.id()
  opt.isNav = opt.isNav ? true : false
  Meteor.call('core.collections.add', opt, err => !err && form.reset())
}

export default index
