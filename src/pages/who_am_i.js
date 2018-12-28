import React from 'react'
import { Link } from 'gatsby'
import { Icon } from 'react-fa'
import ImageWho from '../components/image_who';
import Layout from '../components/layout'

export default class WhoAmI extends React.Component {
  render() {
    return (
      <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link to={'/'}>
          <Icon 
            style={{color: 'steelblue'}}
            size="2x"
            name={"home"} />
        </Link>
        <h1 style={{ fontWeight: 300, marginTop: 50 }}>
          Hi! My name is Vadim and I'm Frontend Developer
        </h1>
        <div
          style={{
            width: '64%',
            borderRadius: '10%',
            display: 'context',
            marginBottom: '30px',
          }}>
            <ImageWho />
        </div>
          <h3> My skills :
            Javascript: React Native(iOS and Android), React JS (Redux, Redux-Saga, Mobx), GraphQL, Apollo ; CSS: Sass, PostCss; HTML: Jade, BEM;
          </h3>
          <h3 style={{ fontWeight: 300 }}>
            I am a sociable web developer who enjoys the simple life. I currently reside in Russia, and am always
              pushing myself to learn and develop my skills further.
          </h3>
          <h4>Contact me: </h4>
          <h4 style={{ fontWeight: 300 }}>
            <Icon name={"envelope"} />
            &nbsp;: nevod80@gmail.com</h4>
          <h4 style={{ fontWeight: 300 }}>
            <Icon name={"skype"} />
            &nbsp;: vadnevod</h4>
          <h4 style={{ fontWeight: 300 }}>
            <Icon name={"telegram"} />
            <a 
              style={{textDecoration: `none`}}
              href='https://t.me/vadsiam'>&nbsp;: https://t.me/vadsiam</a>
          </h4>
        </div>
      </Layout>
    )
  }
}
