import Layout from '../components/Layout';
import TagList from '../components/TagList';
import {loadDataList} from './api/data';

export default function Tag({data, tag, tagList}) {
    // console.log('tag----> ', tagList);
    return (
        <Layout>
            <TagList data={tagList} />
            <div className="w-4/5 md:3/4 xl:w-1/2  mx-auto h-4 border-b-2 border-gray-300 text-center mt-4 mb-6">
                <span id="tagActive" className="bg-white px-2 py-1 mt-1 text-lg">#{tag}</span>
            </div>

            <div className="flex justify-center">
                <div className="w-4/5 md:3/4 xl:w-1/2 mb-6">
                    <div id="list" className="flex flex-wrap">
                        {data.map((item, index) => (
                            <div key={index} className="my-1">
                                <a className="mr-2 px-2 py-1 rounded-md text-sm cursor-pointer bg-gray-200 hover:bg-gray-300" href={item.url} target="_blank" rel="noreferrer">
                                    {item.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticPaths() {
    let data = await loadDataList();
    let tagsSet = new Set();
    tagsSet.add('#高频访问');
    for (const key in data){
        data[key].tags.split(/\s+/).forEach(element => tagsSet.add(element));
    }
    let paths = Array.from(tagsSet).map(tag => ({params: {tag}}))
    // console.log('paths: ', paths);
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const tag = params.tag;
    // console.log('tags', tag);
    const siteData = await loadDataList();

    let tagsSet = new Set();
    tagsSet.add('高频访问');
    for (const key in siteData){
        siteData[key].tags.split(/\s+/).forEach(element => tagsSet.add(element));
    }

    let filterData = [];
    for (const key in siteData){
        siteData[key].tags.split(/\s+/).forEach(element => {
            if(tag.includes(element)){
                filterData.push(siteData[key]);
            }
        });
    }

    return {
        props: {
            tagList: Array.from(tagsSet),
            tag,
            data: filterData
        }
    }
}