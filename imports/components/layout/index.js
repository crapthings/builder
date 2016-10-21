import Nav from './nav'

const index = ({ collections, children, ...props }) => <div>

  {console.log(props)}

  <Nav {...props.route} />
  {children}
</div>

export default index
