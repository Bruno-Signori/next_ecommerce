import React from 'react'
import { NextPageContext } from 'next'

interface Props {
  stars?: string;
}

export default class Page extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
     const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }
  

    render() {
      return <div>Next stars: {this.props.stars}</div>
    }
  }
  
