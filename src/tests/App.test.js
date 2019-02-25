import React from 'react';
import ReactDOM from 'react-dom';
import { createMount, cleanUp } from '@material-ui/core/test-utils';
import expect from 'expect';
import App from '../App';
import Search from '../components/Search';
import CountryList from '../components/CountryList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { spy } from 'sinon';

configure({ adapter: new Adapter() });

describe('CountryFilter <App />', () => {

  let mount;
  beforeEach(() => { mount = createMount(); });
  afterEach(() => { mount.cleanUp(); });

  it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('check default/initial state of the application', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(CountryList).instance().state.filteredCountries).toEqual(["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas" ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands" ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica" ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea" ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana" ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India" ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia" ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania" ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia" ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal" ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles" ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan" ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia" ,"Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)" ,"Yemen","Zambia","Zimbabwe"]);
  });

  it('check if case-sensitive queries give correct results', () => {
    const wrapper = mount(<App />);
    wrapper.find(Search).instance().handleChange({ target: { value: 'Car' } });
    expect(wrapper.find(CountryList).instance().state.filteredCountries).toEqual(['Madagascar', 'Nicaragua']);
  });

  it('check if appropriate countries are present in the rendered HTML', () => {
    const wrapper = mount(<App />);
    wrapper.find(Search).instance().handleChange({ target: { value: 'iNd' } });
    const countries = wrapper.find(CountryList).instance();
    expect(wrapper.text()).toEqual('Country FilterFrench West IndiesIndiaIndonesia');
  });


  it('check if fuzzy search is supported by the logic and renders correct HTML', () => {
    const wrapper = mount(<App />);
    wrapper.find(Search).instance().handleChange({ target: { value: 'or' } });
    const countries = wrapper.find(CountryList).instance();
    expect(wrapper.text()).toEqual("Country FilterAndorraEcuadorEl SalvadorEquatorial GuineaGeorgiaJordanMoroccoNorwayPortugalSingaporeSouth KoreaTimor L\'Este");
  });
});
