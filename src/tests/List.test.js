import React from 'react';
import List from '../components/list';

const todoes = [
    {_id: 5, title: "some title", body: "dsklhfdjksnvmc", done: true},
    {_id: 6, title: "title", body: "xxxxxxxx", done: false}

]
jest.mock('../containers/form-page', () => ()=> <div id="mockUserCom">KeyFigures</div>)
jest.mock('../containers/item-page', () => ()=> <div >List item</div>)

describe('<List />', () => {
    it('renders correctly', () => {
        const didMountSpy = sinon.spy(List.prototype, 'componentDidMount');
        const wrapper = mount(<List todos={todoes} />);
        expect(didMountSpy.callCount).toBe(1);
        expect(wrapper).toMatchSnapshot()
    })
})