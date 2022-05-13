import Layout from "../components/Layout"

export default function About() {
    return <Layout>
       <div className="w-4/5 md:3/4 xl:w-1/2  mx-auto mt-10 content">
        {/* <p>我是谁, 我从哪里来, 要到哪里去</p> */}
        {/* <p>Hi, 我的ID是「乱红如雨」, 目前是软件工程师, 在 MindCoord 主要负责后端内容. </p> */}
        <img src="/who.png" alt="我是谁, 我从哪里来, 要到哪里去" width="100%"/>

        <h2 className="pt-4 fo">联系方式: lhqs.gu@gmail.com</h2>
       </div>
    </Layout>
}