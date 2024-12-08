import Image from "next/image";
import localFont from "next/font/local";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import styles from "../styles/home.module.css"
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>

    <div>
    <h1  className={styles.title}>HomePage</h1>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis repudiandae dolorum. Nostrum, ad quam alias laborum doloremque esse tenetur iusto quidem nihil optio voluptas facere obcaecati eligendi quo labore!</p>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa quia suscipit ut quo quaerat nobis nisi repudiandae ipsum asperiores at quisquam laboriosam exercitationem, doloribus illo similique, enim architecto tempora?</p>
    <Link href='/ninjas' className={styles.btn}>
    See Ninjas Listing
    </Link>
    </div>
    </>
  );
}
