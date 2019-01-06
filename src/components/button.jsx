import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import {Icon} from 'react-fa'


export default class Button extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }

  state = {
    spin: false
  }

  showAnimate = () => this.setState({ spin: true })

  hideAnimate = () => this.setState({ spin: false })

  render() {
    const { link, title, icon } = this.props;
    const { spin } = this.state;

    return (
          <Link to={link}>
            <button
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                backgroundColor: 'white',
                border: '1px solid black',
                margin: `0 0 2vh`,
                cursor: 'pointer',
                outlineColor: 'white'
              }}
              onMouseEnter={this.showAnimate}
              onMouseLeave={this.hideAnimate}
              >
                <div><Icon  spin={spin} size="2x" name={icon} /></div>
                <h3>{title}</h3>
            </button>
          </Link>
    )
  }
}
