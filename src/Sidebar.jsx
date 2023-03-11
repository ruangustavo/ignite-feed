import { PencilSimpleLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img src="https://github.com/ruangustavo.png" />

        <div className={styles.profileInfo}>
          <strong>Ruan Gustavo</strong>
          <span>Full-stack Developer</span>
        </div>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} weight="bold" />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
