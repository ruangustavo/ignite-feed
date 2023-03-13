import styles from "./Avatar.module.css";

export function Avatar({ src, hasBorder = false }) {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
