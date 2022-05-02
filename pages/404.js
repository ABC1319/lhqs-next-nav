import Layout from "../components/Layout"
import Link from "next/link"
export default function CustomNotFound() {
    return <Layout>
            <div className="relative overflow-hidden bg-white">
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                    <div className="w-full font-mono flex flex-col items-center relative z-10">
                        <h1 className="text-black font-extrabold text-5xl text-center text-white leading-tight mt-4">Page is not found</h1>
                        <p className="text-black font-extrabold text-8xl my-44 text-white animate-bounce">
                            404
                        </p>
                        <Link href="/"><a className="underline">Home</a></Link>
                    </div>
                </div>
            </div>


    </Layout>
}