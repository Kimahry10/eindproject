import '../styles/globals.css'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import awsmobile from '../aws-exports'
import { UserComponentsProvider } from '../providers/UserComponents'
import { AuthProvider } from '../providers/AuthenticatedUser'
Amplify.configure({
  ...awsmobile,
  ssr: true
})

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <UserComponentsProvider>
        <Component {...pageProps} />
      </UserComponentsProvider>
    </AuthProvider>
  )
}

export default MyApp
