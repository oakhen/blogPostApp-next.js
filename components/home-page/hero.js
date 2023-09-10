import Image from "next/image"
import classes from "./hero.module.css"

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/sites/akki.jpeg"
          width={300}
          height={300}
          alt="profile goes here"
        />
      </div>
      <h1>Hi I&apos;am Akki</h1>
      <p>I&apos;m a web developer</p>
    </section>
  )
}
export default Hero

/* kuch v agar public folder me hoga toh wo root pe chala jaega */
