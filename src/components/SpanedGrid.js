import styled, { css } from 'styled-components'
import P from 'prop-types'

const sumSubProp = subProp => ({
  onProp: prop => o =>
    o[prop].reduce((acc, subObj) => (acc += subObj[subProp]), 0)
})

const matchValOfProp = prop => ({
  with: matchers => o => matchers[o[prop]]
})

export const SpanedGrid = styled.div`
  display: grid;
  grid-gap: ${p => p.gap};
  height: ${p => p.height};
  width: ${p => p.width};
  grid-template-columns: repeat(${sumSubProp('rank').onProp('data')}, 1fr);
  ${p =>
    p.data.map(
      ({ rank }, i) => css`
        > *:nth-child(${i + 1}) {
          ${matchValOfProp('spanningType').with({
    column: css`
              grid-column: span ${rank};
            `,
    row: css`
              grid-row: span ${rank};
            `,
    alternate:
              i % 2 === 0
                ? css`
                    grid-column: span ${rank};
                  `
                : css`
                    grid-row: span ${rank};
                  `
  })};
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
  ),
  /**
   * @property {string} spanningType - Wether to span items on column, row, or alternate.
   */
  spanningType: P.oneOf(['column', 'row', 'alternate'])
}

SpanedGrid.defaultProps = {
  gap: '10px',
  debug: false
}
