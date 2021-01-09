import Head from "next/head"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function Header(props){
	
	const links=['','works','fun','blog','photography','bookshelf'];
	const path = useRouter().pathname.split('/')[1];
	
	return(
		<header className="w-1000 m-auto py-12">
			<nav className="w-96 inline-block">
				{links.map((x,i)=>(
				<React.Fragment key={x}>
					<Link href={`/${x}`}>
						<a className={`inline-block text-4xl font-serif mr-2 mb-3 ${path===x?'text-theme first-letter':'text-gray-700'}`}>{x===''?'about':x}</a>
					</Link>	
					{(!(i%2)||(i===1))?<span className="text-3xl text-gray-600 mr-2">•</span>:''}
				</React.Fragment>))}
			</nav>
			<Link href="/">
				<a className="inline-block text-2xl font-sans text-gray-700 align-top pt-2 float-right">Poobesh Gowtham</a>
			</Link>
		</header>
	)

};
