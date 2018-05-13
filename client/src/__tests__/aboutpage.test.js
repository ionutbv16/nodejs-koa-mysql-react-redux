import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import AboutPage from '../AboutPage';


describe('<HomePage />', () => {
  
  it('Check for homepage H1', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper.contains(<h1>About Me</h1>)).to.equal(true);
});
});