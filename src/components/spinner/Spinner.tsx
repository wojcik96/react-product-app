import classes from './Spinner.module.css'; 

function Spinner() {
  return (
    <div className={classes.spinner}>
      <div className={classes.spinner__loader}></div>
      <p className={classes.spinner__text}>Loading data...</p>
    </div>
  );
}

export default Spinner;
