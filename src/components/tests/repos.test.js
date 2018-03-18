import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import Repos from '../repos';

describe('Repos', () => {
  it('should render 1 child', () => {
    const details = [{
      name: 'activeplaces',
      full_name: 'ja/activeplaces',
    }];
    const languageData = {
      Java: 154321,
      JavaScript: 1234,
      C: 1000
    };
    const searchReposLang = sinon.spy();
    const wrapper = shallow(<Repos details={details} languageData={languageData} searchReposLang={searchReposLang}/>);
    wrapper.find('.nameClick').simulate('click');
    expect(searchReposLang).to.have.property('languageData', 1);
    // expect(wrapper.find('Ul')).to.have.length(1);
  });
});
