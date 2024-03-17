import ComingSoon from '../components/ComingSoon'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

const WhatsNew = () => {
  return (
    <>
      <Header />
      <SideNav selectedTab="whatsnew">
        <ComingSoon />
      </SideNav>
    </>
  )
}

export default WhatsNew
