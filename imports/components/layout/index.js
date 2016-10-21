import Nav from './nav'

const index = ({ children, ...props }) => <div>
  <Nav {...props.route} />
  {children}
</div>

export default index
