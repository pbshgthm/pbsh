import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import {join} from 'path'

import Project, {Components} from '../../components/Project'

import Header from '../../components/Header'
import Layout from '../../components/Layout'

const components = Components;

export default function Works({ source, frontMatter }){
	
	const content = hydrate(source, { components })
	return(
		<Layout title={ frontMatter.NAME + ' • Poobesh'}>
			<Header navLink='works' theme={frontMatter.THEME}/>
			<Project meta={frontMatter}>{content}</Project>
		</Layout>
	)
	
}

export async function getStaticProps({params}) {
	const { content, data } = matter.read(join("content/works/", params.slug + ".md"))
	const mdxSource = await renderToString(content, { components, scope: data })
	return { props: { source: mdxSource, frontMatter: data } }
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { slug: 'vangogh' } },
			{ params: { slug: 'covidwire' } },
			{ params: { slug: 'hotbox' } },
		],
		fallback: false
	};
}


