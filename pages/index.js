import Homepage from "./Homepage";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('./Homepage/index'),
  { ssr: false }
)

export default function Home() {
  return (
    <DynamicComponentWithNoSSR />
  )
}
