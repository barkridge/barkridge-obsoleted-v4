import { useState } from 'react'

import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
  Aside,
  Footer,
  MantineTheme,
} from '@mantine/core'

type StandardLayoutProps = {
  children?: React.ReactNode
}

const StandardLayout = ({ children }: StandardLayoutProps) => {
  const theme = useMantineTheme()

  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      padding="md"
      navbar={<CustomNavbar opened={opened} />}
      aside={<CustomAside />}
      footer={<CustomFooter />}
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
      asideOffsetBreakpoint="sm"
    >
      {children}
    </AppShell>
  )
}

export default StandardLayout

interface CustomNavbarProps {
  opened: boolean
}

const CustomNavbar = ({ opened }: CustomNavbarProps) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
    </Navbar>
  )
}

const CustomAside = () => {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <Text>&nbsp;</Text>
      </Aside>
    </MediaQuery>
  )
}

const CustomFooter = () => {
  return (
    <Footer height={60} p="md">
      Application footer
    </Footer>
  )
}

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
            mr="xl"
          />
        </MediaQuery>

        <Text>Application header</Text>
      </div>
    </Header>
  )
}
