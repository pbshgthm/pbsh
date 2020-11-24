import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/Layout'

import styles from '../styles/Project.module.scss'

export default function Home() {
  return (
    <Layout title="about">
			<Header navLink="about"/>
		 	<ul>
				<li>
					<Link href="/works/covidwire">
						<div className="">
						</div>
					</Link>
      	</li>
			</ul>
		</Layout>
  )
}


			<li>
        <Link href="/works/covidwire">
          <a>covidwire</a>
        </Link>
      </li>

