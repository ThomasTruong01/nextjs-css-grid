import { useState } from "react"
import styles from "../styles/ResponsiveGrid.module.css"
import Head from "next/head";

const Box = () => {
    const [Boxes, setBoxes] = useState(12)
    const repeat = Array(Boxes);

    const handleChange = (e) => {
        e.preventDefault();
        const num =  parseInt(e.target.value) ? parseInt(e.target.value) : 12;
        setBoxes(num)
    }
    return (
        <>
            <div className={styles.boxes}>
                <label className={styles.description} htmlFor="boxes">Number of boxes to make</label>
                <input name="boxes" type="text" value={Boxes} onChange={handleChange} />
            </div>
            {[...repeat].map((item, idx) => {
                return (<div className={styles.card} key={idx}>Box</div>)
            })}
        </>
    )
}

const ResponsiveGrid = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>CSS Grid Responsive</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div>
                    <p className={styles.title}>CSS Grid Responsive</p>
                </div>
            </header>
            <main className={`${styles.main} ${styles.horizontal}`}>
                <div className={`${styles.grid}`}>
                    <Box />
                </div>
            </main>

        </div>
    )
}

export default ResponsiveGrid