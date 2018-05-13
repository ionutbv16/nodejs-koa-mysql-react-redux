 

//import React from 'react';

test('render a label', () => {
    const wrapper = shallow(
        <div>Hello Jest!</div>
    );
    expect(wrapper).toMatchSnapshot();
});
