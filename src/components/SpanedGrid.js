import styled, { css } from 'styled-components'
import P from 'prop-types'

const sumSubProp = subProp => ({
  on: prop => o => o[prop].reduce((acc, subObj) => (acc += subObj[subProp]), 0)
})

export const SpanedGrid = styled.div`
  display: grid;
  grid-gap: ${p => p.gap};
  height: ${p => p.height};
  width: ${p => p.width};
  grid-template-columns: repeat(${sumSubProp('rank').on('data')}, 1fr);
  ${p =>
    p.data.map(
      ({ rank }, i) => css`
        > *:nth-child(${i + 1}) {
          grid-column: span ${rank};
        }
      `
    )};
  ${p =>
    p.debug &&
    css`
      > * {
        background-color: red;
      }
    `};
`
/**
 * @typedef RankableObj
 * @type {object}
 * @property {number} rank - The importance of the item from which the grid-item spaning is derived.
 */

SpanedGrid.propTypes = {
  /**
   * @property {string} gap - Gap between grid items.
   */
  gap: P.string,
  /**
   * @property {string} height - Height of the grid.
   */
  height: P.string,
  /**
   * @property {string} width - Width of the grid.
   */
  width: P.string,
  /**
   * @property {Array<RankableObj>} data - Width of the grid.
   */
  data: P.arrayOf(
    P.shape({
      rank: P.number
    }).isRequired
  )
}

SpanedGrid.defaultProps = {
  gap: '10px',
  debug: false
}
