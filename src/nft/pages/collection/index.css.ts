import { style } from '@vanilla-extract/css'
import { buttonTextMedium } from 'nft/css/common.css'

import { sprinkles, vars } from '../../css/sprinkles.css'

export const bannerContainerNoBanner = style({ height: '0', marginTop: '0px' })

export const bannerImage = style({ objectFit: 'cover' })

export const baseActivitySwitcherToggle = style([
  buttonTextMedium,
  sprinkles({
    position: 'relative',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  }),
  {
    lineHeight: '24px',
  },
])

export const activitySwitcherToggle = style([
  baseActivitySwitcherToggle,
  sprinkles({
    color: 'darkGray',
  }),
])

export const selectedActivitySwitcherToggle = style([
  baseActivitySwitcherToggle,
  sprinkles({
    color: 'blackBlue',
  }),
  {
    ':after': {
      content: '',
      position: 'absolute',
      background: vars.color.genieBlue,
      width: '100%',
      height: '2px',
      left: '0px',
      right: '0px',
      bottom: '-8px',
    },
  },
])

export const noCollectionAssets = sprinkles({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40',
})
