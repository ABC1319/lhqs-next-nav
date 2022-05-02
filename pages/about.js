import Layout from "../components/Layout"

export default function About() {
    return <Layout>
       <div className="w-4/5 md:3/4 xl:w-1/2  mx-auto mt-10 content">
        <p>我是谁, 我从哪里来, 要到哪里去</p>
        {/* <p>Hi, 我的ID是「乱红如雨」, 目前是软件工程师, 在 MindCoord 主要负责后端内容. </p> */}
        {/* <p>如果对我司感兴趣, 不限职位(非技术职位会推荐到对应的负责人手上), 欢迎加入, 我们一起做些有挑战的事情</p> */}

        <h2 className="font-bold pt-4">联系方式</h2>
        <li>Email: lhqs.gu@gmail.com</li>
        <li>Github: https://github.com/lhqs</li>
        <li>微信: lhqsyudao</li>
       </div>
    </Layout>
}