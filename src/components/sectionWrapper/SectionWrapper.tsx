import SectionWrapperProps from "../../types/sectionWrapperProps";
import classes from "./SectionWrapper.module.css";

function SectionWrapper({ title, children }: SectionWrapperProps) {
  return (
    <section className={classes.sectionWrapper}>
      <h1 className={classes.sectionWrapper__title}>{title}</h1>
      {children && (
        <section className={classes.sectionWrapper__content}>
          {children}
        </section>
      )}
    </section>
  );
}

export default SectionWrapper;
