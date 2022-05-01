import Link from 'next/link';

export default function TagList({data}) {

    return <div className="pt-4 flex justify-center flex-wrap">
       <div className="w-4/5 md:3/4 xl:w-1/2">
        <div className="flex flex-wrap">
                {data && data.map((tag, index) => (
                    <Link key={index} href="/[tag]" as={`/${tag}`}><a title="" className="m-1 text-gray-600  border-2 border-slate-300  hover:bg-gray-300  focus:bg-gray-600 focus:text-white rounded-md px-2 text-sm" key={tag}>{tag}</a></Link>
                ))}
        </div>
       </div>
    </div>
}