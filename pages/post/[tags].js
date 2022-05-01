import Link from 'next/link';
// import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Post({data}) {
    return <>
        <Head>
            <title>乱红如雨 | 信息导航</title>
        </Head>
        <div>
            <Link href="/"><a title="test page">jump to home</a></Link>
            <div>{data.tags}</div>
            <div>{data.title}</div>
            <div>{data.url}</div>
        </div>
    </>
}

export async function getStaticPaths() {
    // let data = await fetch("http://info.lhqs.ink/data/website.json").then(res => res.json());
    // let data = {"person": "lhqs", "age": "18"};
    let filterData = [{params: {
        "tags": "site",
        "title": "乱红如雨",
        "url": "https://lhqs.vercel.app/"
    }},{params:{
        "tags": "github",
        "title": "Github trending",
        "url": "https://github.com/trending"
    }}];
    return {
        // paths: [{params: {tags: "github tech blog", title: "test page"}}, {params: {tags: "github tech blog2", title: "test page2"}}],
        paths: filterData,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const tags = params.tags;
    console.log('data ---> ', tags, params);
    const data = {"tags": tags, "title": "乱红如雨", url: "https://lhqs.vercel.app/"};
    return {
        props: {
            data
        }
    }
}