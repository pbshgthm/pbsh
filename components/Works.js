import {useState,useEffect,useRef} from 'react'
import Link from 'next/link'
import {animateScroll as scroll} from 'react-scroll';
import Image from 'next/image'
import {ProgressRing} from './utilities';

function goTo(hash){
	const pos=getScrollPos(hash)-60;
	scroll.scrollTo(pos,{
		smooth: 'easeInOut'
		}
	);
}

function getScrollPos(hash){
	const rect = document.getElementById(hash).getBoundingClientRect();
  return (rect.top + (window.pageYOffset || document.documentElement.scrollTop))
}


export default function Works({children,meta}){
	
	const [currHash,setCurrHash]=useState('')
	
	function handleScroll(){
		const curr = document.documentElement.scrollTop
		const sortedHash = meta.HASH.map(x=>(
			[x,curr-getScrollPos(x)+150]
		)).filter(x=>x[1]>0).sort((a,b)=>(a[1]<b[1]?-1:1))

		if(sortedHash.length>0)setCurrHash(sortedHash[0][0])
		else setCurrHash('')		
	}

	useEffect(()=>{
		window.addEventListener('scroll',handleScroll);
		return () => window.removeEventListener('scroll',handleScroll);
	},[])

	return(
			<>
				<article className="mt-16 w-wide m-auto overflow-hidden">
					<section className="text-center mb-20">
						<h1 className="py-6 text-5xl font-sans font-medium text-theme">
							{meta.NAME.toUpperCase()}
						</h1>
						<h2 className="py-6 m-auto text-5xl font-serif text-gray-700 w-3/4">{meta.DESC}</h2>
						<Image src={`/works/assets/${meta.SLUG}/cover.png`} width="1024" height="650" />
					</section>
					<section className="m-auto w-norm relative">
						{children}
					</section>
				</article>
				
				<ProgressRing/>
				<aside className={`fixed top-64 left-8 font-serif text-gray-400 text-lg border-b-2 border-t-2 py-4 border-gray-300 transition ${currHash?'visible opacity-1':'opacity-0 invisible'}`}>
					{meta.HASH.map(x=>(
						<div key={x} className={`my-2 cursor-pointer transition hover:text-theme ${x===currHash?'text-theme':''}`} onClick={()=>goTo(x)}>{x}</div>
					))}
				</aside>
			</>
	)
}


//CUSTOM MDX COMPONENTS ///////////////////////////////

var isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};

const heading1 = (props)=>(
	<h1 id={props.children} className="text-left text-2xl font-bold text-theme mt-20 mb-4 -ml-16">
		☷☷&nbsp;&nbsp;&nbsp;{props.children.toUpperCase()}
	</h1>)

const heading2 = (props)=>(
	<h2 className="text-left text-4xl font-bold text-gray-900 mb-12">
		{props.children}
	</h2>)

const heading3 = (props)=>(
	<h3 className="text-left text-xl font-bold text-gray-700 mt-10 mb-3">
		{props.children}
	</h3>)

const quote = (props)=>(
	<blockquote className="text-2xl text-left text-theme my-10 border-l-4 pl-4 border-theme">
		{props.children.props.children}
	</blockquote>)

const paragraph = (props)=>{
	const isImg=isObject(props.children)?(props.children.props.mdxType==='img'):false
	
	if(isImg){
		const source = props.children.props.src;
		return (
			<div className="my-16" style={{width:`${source.split('_')[1]}px`, marginLeft:`-${(source.split('_')[1]-680)/2}px`}}>
				<Image src={`/works/${source}`} width={source.split('_')[1]} height={source.split('_')[2]}/>
				<div className="font-sans text-center text-sm text-gray-500 m-auto mt-2">{props.children.props.alt}</div>
			</div>
		)
	}
	
	return (
		<p className="text-left text-lg font-serif text-gray-600">
			{props.children}
		</p>)
}

const links = (props)=>(
	<a className="underline" target="_blank" rel="noopener noreferrer" {...props}/>
)

export const Components={
	h1:heading1,
	h2:heading2,
	h3:heading3,
	p:paragraph,
	blockquote:quote,
	a:links
}
