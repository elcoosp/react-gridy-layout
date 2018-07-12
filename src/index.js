import React from 'react'
import { render } from 'react-dom'
import { Header, Aside, Main, Footer, Layout } from './components/Gridy'

const App = () => (
  <Layout debugBg>
    <Header>Header</Header>
    <Aside>Aside</Aside>
    <Main>Main</Main>
    <Footer>Footer</Footer>
  </Layout>
)
render(<App />, document.getElementById('root'))
