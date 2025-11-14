import GradualBlur from "./GradualBlur";

const K2XS = () => {
  return (
    <section style={{ position: "relative", height: 120, overflow: "hidden" }}>
      <div style={{ height: "50%", }}>
        <div className="flex justify-center align-baseline text-9xl stack-sans-notch-500">K2XS</div>
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
};

export default K2XS;
