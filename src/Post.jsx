import styles from "./Post.module.css";

export function Post() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.user}>
          <img src="https://github.com/ruangustavo.png" />
          <div className={styles.info}>
            <strong>Ruan Gustavo</strong>
            <span>Full-stack developer</span>
          </div>
        </div>
        <time>Públicado há 1 minuto</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <footer className={styles.footer}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <button>Publicar</button>
      </footer>
    </div>
  );
}
