
import Link from "next/link"

export default function NavBar() {
    return <nav>
                <div className="flex flex-nowrap justify-between bg-black text-white  font-bold">
                    <h1 className="px-4 py-2 hover:text-sky-400"><Link href="/" rel="noreferrer"><a>乱红如雨lhqs</a></Link></h1>
                    <div className="px-4 py-2">
                        <span id="checkout" className="hover:text-sky-400"><Link href="./hunt" rel="noreferrer"><a>聚合搜索</a></Link></span>
                        <span id="checkout" className="px-4 hover:text-sky-400"><a href="https://github.com/lhqs/lhqs-next-nav" target="_blank" rel="noreferrer">Github</a></span>
                        <span id="slogan" className="hover:text-sky-400"><a href="./page/about.html" rel="noreferrer">关于</a></span>
                    </div>
                </div>
            </nav>
}