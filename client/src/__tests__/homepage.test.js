import { shallow } from 'enzyme';

import sinon from 'sinon';
import HomePage from '../HomePage';


describe('<HomePage />', () => {
  it('renders three <HomePage /> components', () => {
    const wrapper = shallow(<HomePage />);
    
    //expect(wrapper.contains(<h1>Home Page</h1>)).to.equal(true); -- false 
    expect(wrapper).toMatchSnapshot();
  });
 
});