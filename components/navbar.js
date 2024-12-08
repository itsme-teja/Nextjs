import Link from "next/link";
import Image from  "next/image"

const NavBar = () => {
    return ( 
        <nav>
            <div className='logo'>
                <Image src="/favicon.ico" width={75} height={75}/>
            </div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/ninjas'>Ninjas List</Link>
        </nav>
     );
}
 
export default NavBar;