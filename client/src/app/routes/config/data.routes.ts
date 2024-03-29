import { lazy } from 'react'

import { authType } from '@/features/AuthForm'
import { ROUTER_PATH } from '@/shared/const/path/PATH'

import type { IRoutesData } from '../types/routes.interface'

const AuthPage = lazy(() => import('@/pages/AuthPage'))
const ProfilePage = lazy(() => import('@/pages/ProfilePage'))
const UsersPage = lazy(() => import('@/pages/UsersPage'))
const GroupPage = lazy(() => import('@/pages/GroupPage'))
const AgentPage = lazy(() => import('@/pages/AgentPage'))
const ContractPage = lazy(() => import('@/pages/ContractPage'))
const DealsPage = lazy(() => import('@/pages/DealsPage'))
const SettingsPage = lazy(() => import('@/pages/SettingsPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
const ClientPage = lazy(() => import('@/pages/ClientPage'))
const ClientsPage = lazy(() => import('@/pages/ClientsPage'))

export const routesData: IRoutesData[] = [
  {
    index: true,
    path: ROUTER_PATH.PROFILE,
    component: ProfilePage,
    isAuth: true,
  },
  {
    component: UsersPage,
    isAuth: true,
    path: ROUTER_PATH.USERS,
  },
  {
    component: ClientsPage,
    isAuth: true,
    path: ROUTER_PATH.CLIENTS,
  },
  {
    component: ClientPage,
    isAuth: true,
    path: ROUTER_PATH.CLIENT,
  },
  {
    component: GroupPage,
    isAuth: true,
    path: ROUTER_PATH.GROUP,
  },
  {
    component: AgentPage,
    isAuth: true,
    path: ROUTER_PATH.AGENT,
  },
  {
    component: ContractPage,
    isAuth: true,
    path: ROUTER_PATH.CONTRACT,
  },
  {
    component: DealsPage,
    isAuth: true,
    path: ROUTER_PATH.DEALS,
  },
  {
    component: SettingsPage,
    isAuth: true,
    path: ROUTER_PATH.SETTINGS,
  },
  {
    component: AuthPage,
    path: ROUTER_PATH.LOGIN,
    isAuth: false,
  },
  {
    component: AuthPage,
    path: ROUTER_PATH.REGISTER,
    type: authType.register,
    isAuth: false,
  },
  {
    component: NotFoundPage,
    path: ROUTER_PATH.NOTFOUNDPAGE,
    isAuth: false,
  },
]
