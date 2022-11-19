import Link from "next/link";
import Styles from '../styles/Navbar.module.css';
const Navbar = () => {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.links}>
                <Link href={"/"}>Grid Layout</Link>
                <Link href={"/ResponsiveGrid/"}>Responsive Grid</Link>
                <Link href={"/OrderList"}>Order List</Link>
            </div>
        </div>
    )
}

export default Navbar;