import styles from "components/Registration/RegistrationSection/RegistrationSection.module.scss";

import cx from "classnames";

function RegistrationSection({
  children,
  title,
  subtitle = null,
  stackVertical = false,
  stackHorizontal = false,
  horizontalOverflow = false,
  withBorder = false,
}) {
  return (
    <section className={styles["section"]}>
      <header
        className={cx(styles["section__header"], {
          [styles["section__header--bordered"]]: withBorder,
        })}
      >
        <h1 className={styles["section__title"]}>{title}</h1>
        {subtitle && <p className={styles["section__subtitle"]}>{subtitle}</p>}
      </header>
      <div
        className={cx([
          styles["section__content"],
          {
            [styles["section__content--stack-vertical"]]: stackVertical,
            [styles["section__content--stack-horizontal"]]: stackHorizontal,
            [styles["section__content--horizontal-overflowed"]]:
              horizontalOverflow,
          },
        ])}
      >
        {children}
      </div>
    </section>
  );
}

export default RegistrationSection;
