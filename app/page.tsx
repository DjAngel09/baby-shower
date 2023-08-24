import styles from './page.module.css'
import { Intro } from '@/components/Intro'

export default function Home() {
  return (
    <main className='container pt-5' style={{width: '100%', padding: '40px 24px'}}>
      <Intro/>
    </main>
  )
}
