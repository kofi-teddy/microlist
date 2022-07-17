import styles from "../../styles/Micro.module.css"
import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    return {
        props: { micros: data}
    }
}

const Micro = ({micros}) => {
    return ( 
    <div>
        <h1>All Micro</h1>
        {micros.map(micro => (
            <Link href={"/micro/"+ micro.id} key={micro.id}>
                <a className={styles.single}> <h3>{micro.name}</h3></a>
            </Link>
        ))}
    </div>
     );
}
 
export default Micro;