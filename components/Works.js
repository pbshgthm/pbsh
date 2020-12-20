import {useState,useEffect,useRef} from 'react'
import Link from 'next/link'
import {animateScroll as scroll} from 'react-scroll';
import Image from 'next/image'



export default function Works({children,meta}){
	
	return(
			<>
				<article className="mt-20 w-1000 m-auto overflow-hidden">
					<section className="text-center">
						<h1 className="py-6 text-5xl font-sans font-medium text-theme">
							{meta.NAME.toUpperCase()}
						</h1>
						<h2 className="py-6 m-auto text-5xl font-serif text-gray-700 w-3/4">{meta.DESC}</h2>
						<Image src={`/works/assets/${meta.SLUG}/cover.png`} width="1000" height="635" />
					</section>
					<section className="text-center">
						{children}
					</section>
				</article>
				<aside></aside>
			</>
	)
}


var isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};

const heading1 = (props)=>(
	<h1 className="text-left text-2xl font-bold text-theme w-700 m-auto my-3">
		{props.children.toUpperCase()}
	</h1>)

const heading2 = (props)=>(
	<h2 className="text-left text-4xl font-bold w-700 m-auto text-gray-700 mt-3 mb-6">
		{props.children}
	</h2>)

const heading3 = (props)=>(
	<h3 className="text-left text-xl font-bold w-700 m-auto text-gray-700 mt-8 mb-3">
		{props.children}
	</h3>)

const quote = (props)=>(
	<blockquote className="text-2xl font-sans text-left w-700 m-auto text-theme my-6 border-l-4 pl-4 border-theme">
		{props.children.props.children}
	</blockquote>
)

const paragraph = (props)=>{
	const isImg=isObject(props.children)?(props.children.props.mdxType==='img'):false
	
	if(isImg){
		const source = props.children.props.src;
		return (
			<div className="m-12">
				<Image src={`/works/${source}`} width={source.split('_')[1]} height={source.split('_')[2]}/>
				<div className="font-sans text-sm text-gray-500 m-auto mt-2">{props.children.props.alt}</div>
			</div>
		)
	}
	
	return (
		<p className="text-left text-xl font-serif text-gray-700 w-700 m-auto py-3">
			{props.children}
		</p>)
}

const image = (props)=>(<Image src={`/works/${props.src}`} width={props.src.split('_')[1]} height={props.src.split('_')[2]}/>)


export const Components={
	h1:heading1,
	h2:heading2,
	h3:heading3,
	p:paragraph,
	blockquote:quote
}
