export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const  data = await res.json();

    const paths = data.map(micro => {
        return {
            params: {id: micro.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+ id)
    const data = await res.json();

    return {
        props: {micro: data}
    }
}

const Details = ({micro}) => {
    return (
        <div>
            <h1>{micro.name}</h1>
            <p>{micro.email}</p>
            <p>{micro.website}</p>
            <p>{micro.address.city}</p>
        </div>
    )
}

export default Details;