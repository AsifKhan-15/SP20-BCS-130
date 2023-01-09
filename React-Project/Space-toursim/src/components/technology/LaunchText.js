import classes from "./LaunchText.module.css";

function LaunchText() {
  return (
    <div className={classes["launch-text"]}>
      <h2>THE TERMINOLOGY…</h2>
      <h3>LAUNCH VEHICLE</h3>
      <p>
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
        carry a payload from Earth's surface to space, usually to Earth orbit or
        beyond. Our WEB-X carrier rocket is the most powerful in operation.
        Standing 150 metres tall, it's quite an awe-inspiring sight on the
        launch pad!
      </p>
    </div>
  );
}

export default LaunchText;
