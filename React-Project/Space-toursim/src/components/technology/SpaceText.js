import classes from "./LaunchText.module.css";

function SpaceText() {
  return (
    <div className={classes["launch-text"]}>
      <h2>THE TERMINOLOGY…</h2>
      <h3>SPACEPORT</h3>
      <p>
        A spaceport or cosmodrome is a site for launching (or receiving)
        spacecraft, by analogy to the seaport for ships or airport for aircraft.
        Based in the famous Cape Canaveral, our spaceport is ideally situated to
        take advantage of the Earth’s rotation for launch.
      </p>
    </div>
  );
}

export default SpaceText;
