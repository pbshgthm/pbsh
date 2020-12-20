import Link from 'next/link'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import matter from 'gray-matter'
import {join} from 'path'

import {useState, useEffect} from 'react'
import {animateScroll as scroll} from 'react-scroll';

function goTo(hash){
	const pos = document.getElementById(hash).offsetTop-120;
	scroll.scrollTo(pos,{
		smooth: 'easeInOut',
		duration:500
		}
	);
}

export default function WorksPage({worksData}) {
	return (
    <Layout title="Works ~ Poobesh">
			{worksData.map(x=><Link key={x.slug} href={`/works/${x.slug}`}><a>{x.NAME}</a></Link>)}
		</Layout>
  )
}

export async function getStaticProps() {
	const worksList=['covidwire']
	var worksData=worksList.map(x=>({...matter.read(join(`public/works/${x}.md`)).data,slug:x}))
	return { props: { worksData: worksData } }
}

