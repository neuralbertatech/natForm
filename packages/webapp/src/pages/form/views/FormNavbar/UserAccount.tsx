import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Avatar, Dropdown, Menus } from '@/components/ui'
import { useStore } from '@/store'
import { clearAuthState } from '@/utils'

export const UserAccount: FC<IComponentProps> = observer(({ className, style }) => {
  const userStore = useStore('userStore')
  const appStore = useStore('appStore')
	const { t } = useTranslation()

  const DropdownOverlay = (
    <Menus className="w-[220px]" onClick={handleClick}>
      <Menus.Item value="profile" label={t('user.settings.account')} />
      <Menus.Item value="help" label={t('other.labelList.Help')} />
      <Menus.Item value="contact" label={t('project.contact')} />
      <div className="px-4 py-2 text-xs text-[#A1A1A1]">
        <span>{t('other.labelList.Version')} {import.meta.env.PACKAGE_VERSION}</span>
      </div>
      <Menus.Divider />
      <Menus.Item value="logout" label={t('other.labelList.Logout')} role="danger" />
    </Menus>
  )

  function handleClick(value: any) {
    switch (value) {
      case 'help':
        window.open('https://docs.heyform.net')
        break

      case 'contact':
        window.open('https://heyform.net/contact')
        break

      case 'profile':
        appStore.isUserSettingsOpen = true
        break

      case 'logout':
        clearAuthState()
        window.location.href = '/login'
        break
    }
  }

  return (
    <div className={[className, 'leading-none'].join(' ')} style={style}>
      <Dropdown placement="bottom-end" overlay={DropdownOverlay}>
        <span className="cursor-pointer p-1">
          <Avatar
            className="inline-block h-8 w-8 rounded-full"
            src={userStore.user.avatar}
            size={80}
          />
        </span>
      </Dropdown>
    </div>
  )
})
