import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  const accountsData = []
  const accounts = {totalBanks: 1, totalCurrentBalance: 10000}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type='greeting' title='Welcome' user={loggedIn?.name || 'Guest'} subtext='Access and manage your account and transactions efficiently.' />
          <TotalBalanceBox accounts={accountsData} totalBanks={accounts?.totalBanks} totalCurrentBalance={accounts?.totalCurrentBalance} />
        </header>
        {/* <RecentTransaction /> */}
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance: 20000}, {currentBalance: 10000}]} />
    </section>
  )
}

export default Home