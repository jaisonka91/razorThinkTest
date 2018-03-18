import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import WrapGitUsers from '../wrapGitUsers';

describe('WrapGitUsers', () => {

  it('should render 1 child', () => {
    let gitUsers = [{
      avatar_url: 'https://avatars2.githubusercontent.com/u/1410106?v=4',
      login: 'A',
      html_url: 'https://github.com/A',
      repositories: [{
        name: '.dotfiles',
        full_name : "A/.dotfiles"
      }],
    }];
    const wrapper = shallow(<WrapGitUsers gitUsers={gitUsers}/>);
    expect(wrapper.find('Users')).to.have.length(1);
  });

  it('should render 2 child', () => {
    let gitUsers = [{
      avatar_url: 'https://avatars2.githubusercontent.com/u/1410106?v=4',
      login: 'A',
      html_url: 'https://github.com/A',
      repositories: [{
        name: '.dotfiles',
        full_name : "A/.dotfiles"
      }],
    },
    {
      avatar_url: 'https://avatars2.githubusercontent.com/u/1410106?v=4',
      login: 'A',
      html_url: 'https://github.com/A',
      repositories: [{
        name: '.dotfiles',
        full_name : "A/.dotfiles"
      }],
    }];
    const wrapper = shallow(<WrapGitUsers gitUsers={gitUsers}/>);
    expect(wrapper.find('Users')).to.have.length(2);
  });

  it('should not render any child', () => {
    let gitUsers = [];
    const wrapper = shallow(<WrapGitUsers gitUsers={gitUsers}/>);
    expect(wrapper.find('Users')).to.have.length(0);
  });
});
