const Nav = () => <ul>
  <li>
    <a href='/'>home</a>
  </li>

  <li>
    <a href='/meteor-call'>Meteor Call Component</a>
  </li>

  <li>
    <a href='/authors'>authors</a>
  </li>

  <li>
    <a href='/test001'>dynamic toggle stateless component with meteor tracker</a>
  </li>

  <li>
    <a href='/test002'>Meteor Data Container Example</a>
  </li>

  <li>
    <a href='/test003'>Meteor Collection Example</a>
  </li>
</ul>

const defaultLayout = ({ component }) => <div>
  <Nav />
  <div>{ component && component() }</div>
</div>

export const config = {
	defaultLayout
}
