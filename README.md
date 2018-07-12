# React-gridy-layout

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/elcoosp/react-gridy-layout/issues)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Css grid react component for simple layout

## Table of Contents

- [React-gridy-layout](#react-gridy-layout)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Example](#example)
  - [Support](#support)
  - [Contributing](#contributing)

## Installation

First be sure to set the @bit registery with :
`npm config set '@bit:registry' https://node.bitsrc.io`
Then run :
`npm i @bit/elcoosp.ui.components.gridy`

## Usage

Documentation available [here](https://bitsrc.io/elcoosp/ui/components/gridy)

### Example

```javascript
import React from 'react'
import { render } from 'react-dom'
import {
  Layout,
  Header,
  Aside,
  Main,
  Footer
} from '@bit/elcoosp.ui.components.gridy'

// Check the documentation for all the available props on the Layout component
const App = () => (
  <Layout debugBg>
    <Header>Header</Header>
    <Aside>Aside</Aside>
    <Main>Main</Main>
    <Footer>Footer</Footer>
  </Layout>
)
render(<App />, document.getElementById('root'))
```

## Support

Please [open an issue](https://github.com/elcoosp/react-gridy-layout/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/elcoosp/react-gridy-layout/compare/).
