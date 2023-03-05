import type { ComponentMeta } from '@storybook/react'

import UrlPage from './UrlPage'

export const generated = () => {
  return <UrlPage />
}

export default {
  title: 'Pages/UrlPage',
  component: UrlPage,
} as ComponentMeta<typeof UrlPage>
