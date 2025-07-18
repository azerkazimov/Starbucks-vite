import styles from "./about.module.css";

interface AboutProps {
  user: string
}

export default function About(props: AboutProps) {
  const { user } = props;

  const style = {
    backgroundColor: "#fefe00",
    color: "#121517",
    paddin: "20px"

  }

  return (
    <div className={styles.container}>
      <div className={styles['about-container']}>
        <p className="about-content">
          hello<span className={styles.highlight}> {user}</span>
        </p>
        <p style={style}>You are in React course</p>
      </div>
    </div>
  );
}
