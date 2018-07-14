import React from 'react'
import { render } from 'react-dom'
import { SpanedGrid } from './components/SpanedGrid'

const App = () => (
  <SpanedGrid
    debug
    data={[{ rank: 1 }, { rank: 3 }, { rank: 5 }]}
    spanningType="alternate"
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
  </SpanedGrid>
)
render(<App />, document.getElementById('root'))
