import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import {join} from 'path'
import Link from 'next/link'

import Works, {Components} from '../../components/Works'
import Layout from '../../components/Layout'

const components = Components;

export default function WorksPage({ contentStr, meta}){
	
	const content = hydrate(contentStr, { components })

	return(
		<Layout title={ meta.NAME + ' • Poobesh'}>
			<div className="w-1000 m-auto">
				<span className="text-xl font-serif text-gray-400 font-light">
					<Link href="/works">
						<a className="mr-2">Works</a>
					</Link>/ 
					<Link href="/works#product-design">
						<a className="mx-2">Product Design</a>
					</Link>/ 
					<Link href="/works/covidwire">
						<a className="text-gray-700 ml-2">{meta.NAME}</a>
					</Link>
				</span>
				<span className="float-right text-gray-400">
					<Link href="/works"><a className="mr-4">← previous</a></Link>|
					<Link href="/works"><a className="ml-4">next →</a></Link>
				</span>
			</div>
			<Works meta={meta}>{content}</Works>
		</Layout>
	)
	
}

export async function getStaticProps({params}) {
	const { content, data } = matter.read(join("public/works/", params.slug + ".md"))
	const contentStr = await renderToString(content, { components, scope: data })
	return { props: { contentStr: contentStr, meta: {...data,SLUG:params.slug} } }
}

export async function getStaticPaths() {
	const workList=['covidwire']
	return {
		paths: workList.map(x=>({ params: { slug: x } })),
		fallback: false
	};
}


