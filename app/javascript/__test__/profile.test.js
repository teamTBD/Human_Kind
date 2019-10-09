import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../components/pages/Profile';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

  Enzyme.configure({ adapter: new Adapter() });

 it('states Your Deeds', ()=>{
   const app = mount(<Profile posts={[]} current_user_id={1} />)
   expect(app.find('#deedTitle').text()).toEqual('Your Deeds')
 })