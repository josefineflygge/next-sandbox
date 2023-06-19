import Image from "next/image";
import classes from "@/styles/hero.module.css";

function TopBanner() {
  return (
    <section className={classes.hero}>
      <p>A Next.js project for summarizing Next.js.</p>
    </section>
  );
}

export default TopBanner;
