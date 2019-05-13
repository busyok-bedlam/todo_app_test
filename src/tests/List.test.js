import React from 'react';
import List from '../components/list';
import ConnectedList from '../containers/list-page';
import { Provider } from 'react-redux';

const todoes = [
    {_id: 5, title: "some title", body: "dsklhfdjksnvmc", done: true},
    {_id: 6, title: "title", body: "xxxxxxxx", done: false}

]
jest.mock('../containers/form-page', () => ()=> <div id="mockUserCom">KeyFigures</div>)
jest.mock('../containers/item-page', () => ()=> <div >List item</div>)

describe('<List />', () => {
    const initialState = [ {_id: 1, body: 'Body1', title: 'Title1'},  {_id: 2, body: 'Body2', title: 'Title2'}, {_id: 3, body: 'Body3', title: 'Title3'} ];
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><ConnectedList /></Provider> )
    })

    it('renders correctly', () => {
        const didMountSpy = sinon.spy(List.prototype, 'componentDidMount');
        const wrapper = mount(<List todos={todoes} />);
        expect(didMountSpy.callCount).toBe(1);
        expect(wrapper).toMatchSnapshot()
    })
})