import React from 'react'

import Layout from '../components/layout'
import ImageMain from '../components/image'
import SEO from '../components/seo'
import Button from '../components/button'
import ButtonNoLink from '../components/button_no_link'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`vadsiam`, `developer`, `frontend`, `react`]} />
    <div>
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
            height: '60vh',
            padding: `0 2vh`,
          }}>
          <ButtonNoLink title={"Experience"} icon={"book"}/>
          <Button link={'/who_am_i/'} title={"Who am I"} icon={"smile-o"}/>
        </div>
        <div
          style={{
            width: '64%',
            height: '60vh',
            borderRadius: '10%',
          }}>
            <ImageMain />
          </div>
          <div
            style={{
              width: '30%',
              height: '60vh',
              padding: `0 2vh`,
            }}>
            <Button link={'/projects/'} title={"Projects"} icon={"cubes"}/>
            <Button link={'/hobby/'} title={"Hobby"} icon={"motorcycle"}/>
          </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
