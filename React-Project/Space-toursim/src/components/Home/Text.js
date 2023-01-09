import classes from "./Text.module.css";

const Text = () => {
  return (
    <main className={classes.main}>
      <div className={classes["text-div"]}>
        <h1>SO, YOU WANT TO TRAVEL TO</h1>
        <h2>SPACE</h2>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <button>Explore</button>
    </main>
  );
};

export default Text;
