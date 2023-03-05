import { useState } from 'react'

import {
  AppShell,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  MantineTheme,
  Group,
  ActionIcon,
} from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'

import { Logo } from './_Logo'
import { NavbarNested } from './_NavbarNested'

type StandardLayoutProps = {
  children?: React.ReactNode
}

const StandardLayout = ({ children }: StandardLayoutProps) => {
  const theme = useMantineTheme()

  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      padding="md"
      navbar={<NavbarNested opened={opened} />}
      header={
        <CustomHeader theme={theme} opened={opened} setOpened={setOpened} />
      }
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
    >
      {children}
    </AppShell>
  )
}

export default StandardLayout

interface CustomHeaderProps {
  theme: MantineTheme
  opened: boolean
  setOpened: (boolean) => void
}

const CustomHeader = ({ theme, opened, setOpened }: CustomHeaderProps) => {
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
          />
        </MediaQuery>

        <Group px={20} position="apart">
          <Logo colorScheme={theme.colorScheme} />
          <ActionIcon variant="default" size={30}>
            {theme.colorScheme === 'dark' ? (
              <IconSun size="1rem" />
            ) : (
              <IconMoonStars size="1rem" />
            )}
          </ActionIcon>
        </Group>
      </div>
    </Header>
  )
}
