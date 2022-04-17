

export default function TagList({data}) {
    return <>
        {data.map(tag => (
            <div className="text-center text-lg" key={tag}>{tag}</div>
        ))}
    </>
}

