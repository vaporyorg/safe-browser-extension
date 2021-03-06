import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ConfirmPassword from './containers/ConfirmPassword'

Enzyme.configure({ adapter: new Adapter() })

describe('Confirm Password Form Validation', () => {

  test('It should return true if the password matches', () => {
    const password = 'qwertyu1'
    const props = {
      location: {
        state: {
          password: 'qwertyu1'
        }
      }
    }
    const component = shallow(<ConfirmPassword {...props} />)
    component.instance().validatePasswords(password)
    expect(component.state().error.match).toEqual(true)
    expect(component.state().continue).toEqual(true)
  })

  test('It should return false if the password doesn\'t match', () => {
    const password = 'qwertyu1'
    const props = {
      location: {
        state: {
          password: 'qwretyu2'
        }
      }
    }
    const component = shallow(<ConfirmPassword {...props} />)
    component.instance().validatePasswords(password)
    expect(component.state().error.match).toEqual(false)
    expect(component.state().continue).toEqual(false)
  })
})
