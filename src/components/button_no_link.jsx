import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from 'react-fa'

import react_n_icon from '../images/icons/react_n.png'
import redux_icon from '../images/icons/redux.png'
import graphql_icon from '../images/icons/graphql.png'
import js_icon from '../images/icons/js.png'
import react_icon from '../images/icons/react.png'


export default class ButtonNoLink extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  state = {
    showContent: false
  }

  showAnimate = () => this.setState({ showContent: true })

  hideAnimate = () => this.setState({ showContent: false })

  render() {
    const { title, icon } = this.props
    const { showContent } = this.state
    const iconStyle = {height: '7vh', margin: '0 10px'}

    return (
      <div>
        {showContent
          ? <div
              style={{
                width: '100%',
                height: '29vh',
                borderRadius: '10%',
                backgroundColor: 'white',
                border: '1px solid black',
                margin: `0 0 2vh`,
                cursor: 'pointer',
                outlineColor: 'white'
              }}
              onMouseLeave={this.hideAnimate}
            >
              <div>
                <img alt="" src={js_icon} style={ iconStyle }/>
                <img alt="" src={graphql_icon} style={ iconStyle } />
              </div>
              <div>
                <img alt="" src={react_icon} style={ {height: '12vh', margin: '0 10px'} } />
              </div>
              <div>
                <img alt="" src={redux_icon} style={ iconStyle } />
                <img alt="" src={react_n_icon} style={ iconStyle } />
              </div>
            </div>
          : <button
              style={{
                width: '100%',
                height: '29vh',
                borderRadius: '10%',
                backgroundColor: 'white',
                border: '1px solid black',
                margin: `0 0 2vh`,
                cursor: 'pointer',
                outlineColor: 'white'
              }}
              onMouseEnter={this.showAnimate}
              >
                <div><Icon size="2x" name={icon} /></div>
                <h3>{title}</h3>
            </button>
        }
      </div>
    )
  }
}
