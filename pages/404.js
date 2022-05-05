import Layout from "../components/Layout"
import Link from "next/link"
export default function CustomNotFound() {
    return <Layout>
            <div className="relative overflow-hidden bg-white">
                <div className="container mx-auto px-6 md:px-10 relative z-10 flex items-center py-24 xl:py-32">
                    <div className="w-full font-mono flex flex-col items-center relative z-10">
                        <h1 className="text-black font-extrabold text-5xl text-center leading-tight mt-4">Page not found</h1>
                        <p className="text-black font-extrabold text-8xl my-32 animate-bounce">
                            404
                        </p>
                        <Link href="/"><a className="underline text-2xl">Home</a></Link>
                    </div>
                </div>
            </div>


    </Layout>
}