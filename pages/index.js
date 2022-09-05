import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Products from "../components/home-page-UI/products/Products";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-3xl">Welcome to Home</h1>
      <Products />
    </div>
  );
}
