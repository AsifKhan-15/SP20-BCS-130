import classes from "./LaunchText.module.css";

function CapsuleText() {
  return (
    <div className={classes["launch-text"]}>
      <h2>THE TERMINOLOGY…</h2>
      <h3>SPACE CAPSULE</h3>
      <p>
        A space capsule is an often-crewed spacecraft that uses a blunt-body
        reentry capsule to reenter the Earth's atmosphere without wings. Our
        capsule is where you'll spend your time during the flight. It includes a
        space gym, cinema, and plenty of other activities to keep you
        entertained.
      </p>
    </div>
  );
}

export default CapsuleText;
