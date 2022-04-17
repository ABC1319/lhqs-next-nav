import Layout from '../../components/Layout';
import {loadDataList} from '../api/data';
export default function Tag({data}) {
    return (
        <Layout>
            <div className="text-center text-lg">tag</div>
            {/* <Link href="/detail/[id]" as={`/detail/${xx.id}`}><a>chick on</a></Link> */}
            <div>
                {data.map(item => (
                    <div key={item.url}>
                        <a className="mr-2 px-2 py-1 rounded-md text-sm cursor-pointer bg-gray-200 hover:bg-gray-300" href={item.url} target="_blank">
                            {item.title}
                        </a>
                    </div>
                ))}
            </div>
        </Layout>
    )
}


export async function getStaticPaths() {
    // let data = await fetch("http://info.lhqs.ink/data/website.json").then(res => res.json());
    // let filterData = [{params: {
    //     "tags": "site",
    //     "title": "乱红如雨",
    //     "url": "https://lhqs.vercel.app/"
    // }},{params:{
    //     "tags": "github",
    //     "title": "Github trending",
    //     "url": "https://github.com/trending"
    // }}];
    let data = await loadDataList();
    let tagsSet = new Set();
    tagsSet.add('#高频访问');
    for (const key in data){
        data[key].tags.split(/\s+/).forEach(element => tagsSet.add(element));
    }
    let paths = Array.from(tagsSet).map(tags => ({params: {tags}}))
    console.log('paths: ', paths);
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const tags = params.tags;
    console.log('tags', tags);
    const siteData = await loadDataList();

    let filterData = [];
    for (const key in siteData){
        siteData[key].tags.split(/\s+/).forEach(element => {
            if(tags.includes(element)){
                filterData.push(siteData[key]);
            }
        });
    }

    return {
        props: {
            data: filterData
        }
    }
}