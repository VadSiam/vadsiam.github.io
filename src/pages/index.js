import React from 'react'

import Layout from '../components/layout'
import ImageWho from '../components/image_who'
import SEO from '../components/seo'
import Button from '../components/button'
import { Icon } from 'react-fa'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`vadsiam`, `developer`, `frontend`, `react`]} />
    <div>
      <h1 style={{ 
        fontWeight: 300, 
        marginTop: 50,
        textAlign: 'center', 
      }}>
        Hi! My name is Vadim and I'm Web Developer
      </h1>
      <div
        style={{
          display: 'inline-flex',
          width: '100%',
          textAlign: 'center',
          marginTop: 50,
        }}>
        <div
          style={{
            width: '30%',
            padding: `0 2vh`,
          }}>
          <Button link={'/projects/'} title={"Projects"} icon={"cubes"}/>
        </div>
        <div
          style={{
            width: '64%',
          }}>
            <ImageWho />
          </div>
          <div
            style={{
              width: '30%',
              padding: `0 2vh`,
            }}>
            <Button link={'/hobby/'} title={"Hobby"} icon={"motorcycle"}/>
          </div>
      </div>
      <div
        style={{marginTop: '30px'}}>
        <h3> My skills :
          Javascript: React Native(iOS and Android), React JS (Redux, Redux-Saga, Mobx), GraphQL, Apollo, NodeJS.
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
    </div>
  </Layout>
)

export default IndexPage
