import Head from 'next/head'
import Link from 'next/link'

export default function Header() {
    return <div>
         <Head>
            <meta charSet="UTF-8"/>
            <meta name="description" content="乱红如雨的个人导航站点, 标签导航 + 聚合搜索, 书签搜索解决方案, 超一千多个精选网址" />
            <link rel="icon" type="image/png" sizes="32x32" href="http://static.lhqs.ink/site/nav/L.png"></link>
            <link rel="icon" href="http://static.lhqs.ink/site/nav/L.png"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="乱红如雨的个人导航站点, 标签导航 + 聚合搜索 "/>
            <meta keywords="text" content="lhqs, 乱红倾世, 乱红如雨, 导航, 搜索, 信息, 信息源, 标签导航, 聚合搜索"/>
            <title>乱红如雨 | 信息导航</title>
            <script async src='https://www.googletagmanager.com/gtag/js?id=G-WWXP600MHQ' />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-WWXP600MHQ');
                `,
              }}
            />
          </Head>
    </div>

}