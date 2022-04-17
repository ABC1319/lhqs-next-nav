import Link from 'next/link';
// import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Test({data}) {
    return <>
        <Head>
            <title>乱红如雨 | 信息导航</title>
        </Head>
        <div>
            <Link href="/"><a title="test page">jump to home</a></Link>
            <div>{data.age}</div>
        </div>
    </>
}

export async function getStaticProps() {
    // let data = await fetch("http://info.lhqs.ink/data/website.json").then(res => res.json());
    let data = {"tags": "lhqs", "age": "18"};
    console.log('data', data[0].tags);
    return {
        props: {
            data
        }
    }
}