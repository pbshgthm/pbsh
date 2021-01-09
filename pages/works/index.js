import Link from 'next/link'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Image from 'next/image'
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

export default function WorksPage({worksList}) {
	
	return (
    <Layout title="Works ~ Poobesh">
			<div className="w-1000 m-auto mt-12">
				<div className="grid grid-cols-3 -mx-8">
					{worksList.map(proj=>(
						<div className="w-72 mx-8 mb-20">
							<Image src={`/works/assets/${proj.SLUG}/thumbnail.png`} width="288" height="288" className="rounded-lg bg-gradient-to-tr from-gray-900 to-gray-600"/>
							<h3 className="text-2xl text-gray-600 font-medium mt-2 font-serif">{proj.NAME}</h3>
							<p className="text-sm text-theme mt-1">{proj.WHAT}</p>
							<p className="text-gray-500 mt-4">{proj.DESC}</p>
							<p className="text-sm text-gray-400 mt-2">{proj.TAG}</p>
						</div>
					))}
				</div>
			</div>
		</Layout>
  )
}

export async function getStaticProps() {
	const slugList=['covidwire','vangogh','mosaic','covidwire','vangogh','mosaic']
	var worksList=slugList.map(x=>({...matter.read(join(`public/works/${x}.md`)).data,SLUG:x}))
	return { props: { worksList: worksList } }
}

