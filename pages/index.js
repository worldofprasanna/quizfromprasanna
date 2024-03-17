import Login from './login'
import { useSession } from '@supabase/auth-helpers-react'
import Home from './home'

const InitialPage = () => {
  const session = useSession()
  return <div>{!session ? <Login /> : <Home />}</div>
}

export default InitialPage
