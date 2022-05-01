import Layout from '../components/Layout';
import { useState } from 'react';
import { loadSearchList } from './api/data';

export default function SearchPage({data}) {

    const [searchInput, setSearchInput] = useState("");
    const onChange = (event) => {
        setSearchInput(event.target.value);
    };

    const defaultSearch = (event) => {
        window.open("https://www.google.com/search?q=" + searchInput, "_blank");
    };

    const searchAction = (url) => {
        const str =  'return ' + '`' + url + '`';
        const func = new Function('query', str);
        window.open(func(search.value));
    };

    return (<Layout>
                <section>
                    <div className="pt-4 flex justify-center">
                        <div className="flex w-4/5 md:3/4 xl:w-1/2 ">
                            <div id="sform" className="w-full pt-2 relative mx-auto text-gray-600">
                                <input id="search" value={searchInput} onChange={onChange}  className="w-full border-2 border-gray-300 bg-white h-10 px-3 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search by keywords" />
                                <button  id="engine" onClick={event => defaultSearch(event)} className="absolute right-0 top-0 mt-4 mr-4 border-gray-300 bg-white">
                                    <svg t="1631195014749" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4225" width="24" height="24"><path d="M430.81460426 808.42087521A388.24537457 388.24537457 0 1 1 430.81460426 31.87499999a388.24537457 388.24537457 0 0 1 0 776.54587522z m0-86.2706249a301.97474968 301.97474968 0 1 0 0-604.00462543 301.97474968 301.97474968 0 0 0 0 604.00462543z" fill="#8a8a8a" p-id="4226"></path><path d="M689.73672915 615.20774977l305.00662478 305.0617499-60.96824989 61.023375-305.06174989-305.0617499z" fill="#8a8a8a" p-id="4227"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section  className="flex justify-center">
                    <div className="w-4/5 md:3/4 xl:w-1/2 mb-6">
                        {
                            data && data.map((item, index) => (
                                <div key={index}>
                                    <div className="text-sm text-gray-400 mt-2">{item.tag}</div>
                                    {item.list && item.list.map((subItem, subIndex) => (
                                        <button key={subIndex} onClick={() => searchAction(subItem.url)} className="mr-2 my-1 px-2 py-1 rounded-md text-sm cursor-pointer bg-gray-200 hover:bg-black hover:text-white">
                                            {subItem.title}
                                        </button>
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                </section>

                <footer id="footer" role="lhqs" className="fixed bottom-0 text-sm text-gray-500 text-center w-full mx-auto py-3 hidden">
                    乱红如雨个人导航站 contact us: lhqs.gu@gmail.com
                </footer>
    </Layout>)
}

export async function getStaticProps () {
    const searchData = await loadSearchList();
    return {
        props: {
            data: searchData.data
        }
    }
  }
