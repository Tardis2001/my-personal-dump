import React from "react";
import Navbar from "../sections/Navbar";
import "@/src/app/scss/index.scss"
import path from "path";
import fs from "fs"
import matter from "gray-matter";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Blog() {
    const blogDir = "posts";
    const files = fs.readdirSync(path.join(blogDir));

    const blogs = files.map((fileName) => {
        const filecontent = fs.readFileSync(path.join(blogDir, fileName), "utf-8");
        const { data:frontMatter } = matter(filecontent);
        return{
            meta:frontMatter,
            slug:fileName.replace(".mdx", ""),
        };
    });
    blogs.sort((a,b) => (a.meta.date > b.meta.date ? -1 : 1));
    return(
        <>
            <Navbar/>
            <h3> Alguns artigos meus</h3>
            {blogs.map((blog) => (
                 <div key={blog.slug}>

                    <div className="container">
                        <div className="row">
                        <div className="col-md-6 item">

                            <div className="item-in">
                            <h3>{blog.meta.title}</h3>
                            <div className="seperator"></div>
                            
                            <h4>{blog.meta.description}</h4>
                            <p>L</p>
                            <Link legacyBehavior href={`/blog/${blog.slug}`}>
                                    <a>Leia Mais
                                        <FaLongArrowAltRight />
                                    </a>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            )   
            )}
            
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