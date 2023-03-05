// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof NavbarLinksGroup> = (args) => {
//   return <NavbarLinksGroup {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { NavbarLinksGroup } from './NavbarLinksGroup'

export const generated = () => {
  return <NavbarLinksGroup />
}

export default {
  title: 'Components/NavbarLinksGroup',
  component: NavbarLinksGroup,
} as ComponentMeta<typeof NavbarLinksGroup>
