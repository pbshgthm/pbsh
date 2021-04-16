import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function Header(props){
	
	const links=['','works','fun','blog','photography','bookshelf'];
	const path = useRouter().pathname.split('/')[1];
	
	return(
		<header className="w-wide m-auto py-12 select-none">
			<nav className="w-96 inline-block">
				{links.map((x,i)=>(
				<React.Fragment key={x}>
					<Link href={`/${x}`}>
						<a className={`inline-block text-4xl font-serif mr-2 mb-3 ${path===x?'text-theme first-letter':'text-gray-700 hover:text-theme'}`}>{x===''?'about':x}</a>
					</Link>	
					{(!(i%2)||(i===1))?<span className="text-3xl text-gray-600 mr-2">•</span>:''}
				</React.Fragment>))}
			</nav>
			<Link href="/">
				<a className="inline-block text-2xl font-medium text-gray-300 align-top pt-2 float-right">Poobesh Gowtham</a>
			</Link>
		</header>
	)

};
