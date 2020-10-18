import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/works/covidwire">
          <a>covidwire</a>
        </Link>
      </li>
      <li>
        <Link href="/works/vangogh">
          <a>vangogh</a>
        </Link>
      </li>
    </ul>
  )
}
