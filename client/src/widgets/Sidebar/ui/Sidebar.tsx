import { memo, useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cx from 'classix'

import Agent from '@/shared/assets/icons/agent.svg?react'
import Avatar from '@/shared/assets/icons/avatar.svg?react'
import BackArrow from '@/shared/assets/icons/back.svg?react'
import Contract from '@/shared/assets/icons/contract.svg?react'
import Deals from '@/shared/assets/icons/deals.svg?react'
import Group from '@/shared/assets/icons/group.svg?react'
import Logo from '@/shared/assets/icons/logo.svg?react'
import LogoMini from '@/shared/assets/icons/logoMini.svg?react'
import Setting from '@/shared/assets/icons/settingsWhite.svg?react'
import StrongMan from '@/shared/assets/icons/strongMan.svg?react'
import Users from '@/shared/assets/icons/usersWhite.svg?react'
import { CURRENT_PATHNAME_KEY } from '@/shared/const/localStorage/currentLocationKey'
import { ROUTER_PATH } from '@/shared/const/path/PATH'

import { SidebarItem } from './SidebarItem/SidebarItem'

import classes from './Sidebar.module.scss'

export const Sidebar = memo(() => {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(true)

  const sidebarItems = useMemo(
    () => [
      {
        title: 'Профиль',
        Icon: <Avatar />,
        to: ROUTER_PATH.PROFILE,
      },
      {
        title: 'Пользователи',
        Icon: <Users />,
        to: ROUTER_PATH.USERS,
      },
      {
        title: 'Клиенты',
        Icon: <StrongMan />,
        to: ROUTER_PATH.CLIENTS,
      },
      {
        title: 'Группы компаний',
        Icon: <Group />,
        to: ROUTER_PATH.GROUP,
      },
      {
        title: 'Контрагенты',
        Icon: <Agent />,
        to: ROUTER_PATH.AGENT,
      },
      {
        title: 'Контракты',
        Icon: <Contract />,
        to: ROUTER_PATH.CONTRACT,
      },
      {
        title: 'Сделки',
        Icon: <Deals />,
        to: ROUTER_PATH.DEALS,
      },
      {
        title: 'Настройки',
        Icon: <Setting />,
        to: ROUTER_PATH.SETTINGS,
      },
    ],
    [],
  )

  const onSidebarVisibleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    localStorage.setItem(CURRENT_PATHNAME_KEY, pathname)
  }, [pathname])

  return (
    <aside className={cx(classes.sidebar, !isOpen && classes.sidebar_hidden)}>
      <div className={cx(classes.logo__wrapper, !isOpen && classes.logo__wrapper_close)}>
        <Link to={ROUTER_PATH.PROFILE}>{isOpen ? <Logo /> : <LogoMini />}</Link>
        <button onClick={onSidebarVisibleToggle} className={cx(classes.back, !isOpen && classes.back_hidden)}>
          <BackArrow />
        </button>
      </div>

      <nav className={classes.nav}>
        <ul className={classes.list}>
          {sidebarItems.map((el, index) => (
            <SidebarItem data={el} isOpen={isOpen} key={el.title + index} pathname={pathname} />
          ))}
        </ul>
      </nav>
    </aside>
  )
})
