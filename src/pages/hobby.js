import React from 'react'
import { Link } from 'gatsby'
import { Icon } from 'react-fa'
import ImageHobby from '../components/image_hobby'
import Layout from '../components/layout'

export default class Hobby extends React.Component {
  render() {
    return (
      <Layout>
      <Link to={'/'}>
        <Icon 
          style={{color: 'steelblue'}}
          size="2x"
          name={"home"} />
      </Link>
        <ImageHobby />
      </Layout>
    )
  }
}
