import '../styles/globals.css'
import { UserComponentsProvider } from '../providers/UserComponents'
import { AuthProvider } from '../providers/AuthenticatedUser'
import { TagsProvider } from '../providers/Tags'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <UserComponentsProvider>
        <TagsProvider>
          <Component {...pageProps} />
        </TagsProvider>
      </UserComponentsProvider>
    </AuthProvider>
  )
}

export default MyApp
