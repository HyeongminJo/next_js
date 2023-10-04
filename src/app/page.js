import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <h1>/app/page.js</h1>
      <ul>
        <li><a href="/sub">/app/sub/index.js</a></li>
      </ul>
    </div>
  )
}
