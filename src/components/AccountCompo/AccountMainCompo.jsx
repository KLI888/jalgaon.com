import React from 'react'
import MyProfile from './MyProfile'

function AccountMainCompo({activeLink}) {
  return (
    <div className="account_main_compo">
        {activeLink == 'myProfile' && (
            <MyProfile />
        )}
    </div>
  )
}

export default AccountMainCompo
