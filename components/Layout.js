
import Header from "./Header"
import TagList from "./TagList"

export default function Layout({data, children }) {
    return (
        <>
            <Header />
            <TagList  data={data}/>
            { children }
        </>
    )
}

