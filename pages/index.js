import Layout from '../components/Layout';
import TagList from '../components/TagList';
import TagGroup from '../components/TagGroup';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {loadDataList} from './api/data';

export default function Home({tagList, data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>乱红如雨 | 信息导航</title>
        <meta name="description" content="乱红如雨的个人导航站点, 标签导航 + 聚合搜索, 书签搜索解决方案, 超一千多个精选网址" />
        <link rel="icon" type="image/png" sizes="32x32" href="http://static.lhqs.ink/site/nav/L.png"></link>
      </Head>

      <main className={styles.main0}>
        <div>
            <div className="flex flex-nowrap justify-between bg-black text-white  font-bold">
                <h1 id="slogan" className="px-4 py-2 hover:text-sky-400"><a href="#" rel="noreferrer">乱红如雨的个人站点</a></h1>
                <div className="px-4 py-2">
                    <span id="checkout" className="hover:text-sky-400"><a href="./search.html" rel="noreferrer">聚合搜索</a></span>
                    <span id="checkout" className="px-4 hover:text-sky-400"><a href="https://github.com/lhqs/lhqs-site-nav" target="_blank" rel="noreferrer">Github</a></span>
                    <span id="slogan" className="hover:text-sky-400"><a href="./page/about.html" rel="noreferrer">关于</a></span>
                </div>
            </div>
        </div>

        <Layout data={tagList}  >
          {/* <TagList data={tagList} /> */}
          <TagGroup data={data} />
        </Layout>
      </main>
    </div>
  )
}

export async function getStaticProps () {
  let data = await loadDataList();
  console.log('data: ', data);
  let tagsSet = new Set();
  tagsSet.add('#高频访问');
  for (const key in data){
      data[key].tags.split(/\s+/).forEach(element => tagsSet.add(element));
  }
  console.log('tagsSet: ', tagsSet, Array.from(tagsSet));
  return {
      props: {
          tagList: Array.from(tagsSet),
          data
      }
  }
}
