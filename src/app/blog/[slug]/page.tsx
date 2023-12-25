import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import "@/src/app/scss/index.scss"
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '../../sections/Navbar'
import Image from 'next/image'

export async function generateStaticParams(){

    const files =fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

function getPost({slug}: {slug: string}){

    const markdownFile = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')

    const{data: fontMatter, content} = matter(markdownFile)

    return {
        fontMatter,
        slug,
        content
    }

}


export default function Page({ params } :any){
    const props = getPost( params);
    
    return (
        <>
        <Navbar />
        <Image src={props.fontMatter.image} alt={props.fontMatter.title} width={560} height={400} style={{display:'flex',justifyContent:'center',margin:'auto', marginBottom:'160px'}} className='postimage'/>
        <article className="center">
            <h1 className='title'>{props.fontMatter.title}</h1>
            <hr />
            <MDXRemote source={props.content}></MDXRemote>
        </article>

    <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
  </div>
        </>
    )
}