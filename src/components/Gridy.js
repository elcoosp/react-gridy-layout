import styled, { css } from 'styled-components'
import P from 'prop-types'

export const Layout = styled.div`
  display: grid;
  grid-gap: ${p => p.gap};
  height: 100vh;
  grid-template-areas:
    'header'
    'main'
    'aside'
    'footer';
  grid-template-rows: 1fr ${p => p.mainRowSize} 1fr 1fr;

  @media (min-width: ${p => p.breakPoint}) {
    ${p =>
    p.asideRight
      ? css`
            grid-template-columns: 6fr 1fr;
            grid-template-areas:
              ${p =>
    p.cutedHeader ? css`'header aside'` : css`'header header'`}
              'main aside'
              'footer footer';
          `
      : css`
            grid-template-columns: 1fr 6fr;
            grid-template-areas:
              ${p =>
    p.cutedHeader ? css`'aside header'` : css`'header header'`}
              'aside main'
              'footer footer';
          `};
    grid-template-rows: 1fr ${p => p.mainRowSize} 2fr;
  }

  ${p =>
    p.debugBg &&
    css`
      & > * {
        background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
      }
    `};
`
Layout.propTypes = {
  /**
   * @property {string} gap - Gap between grid items.
   */
  gap: P.string,
  /**
   * @property {string} breakPoint - Minimal width before displaying multi-column layout .
   */
  breakPoint: P.string,
  /**
   * @property {string} mainRowSize - Main row width as a grid template unit (fr, px...)
   */
  mainRowSize: P.string,
  /**
   * @property {boolean} asideRight - Place the aside to the right
   */
  asideRight: P.bool,
  /**
   * @property {boolean} cutedHeader - Extend the aside to the start of the header row
   */
  cutedHeader: P.bool,
  /**
   * @property {boolean} debugBg - Add a beautiful background to all grid items for ease of debugging
   */
  debugBg: P.bool
}

Layout.defaultProps = {
  gap: '5px',
  breakPoint: '700px',
  mainRowSize: '8fr',
  asideRight: false,
  cutedHeader: false,
  debugBg: false
}
export const Header = styled.header`
  grid-area: header;
`
export const Aside = styled.aside`
  grid-area: aside;
`
export const Main = styled.main`
  grid-area: main;
`
export const Footer = styled.footer`
  grid-area: footer;
`
