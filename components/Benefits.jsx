const Benefits = () => {
  return (
    <section
      id="benefits"
      className="pt-20 pb-20 border-4 border-solid border-t-indigo-400 border-b-transparent border-r-transparent border-l-transparent
 "
    >
      <div className="container justify-center items-center text-center">
        <p className="text-bold text-gray-500 text-sm">Our Unique Approach</p>
        <h1 className="text-3xl pb-14">Your Benefits</h1>
        <div className="grid max-sm:grid-col-1 grid-col-2 gap-4">
          <div className="space-y-4">
            <h1 className="text-2xl">Entrepreneurial Experience</h1>
            <p>
              Benefit from our extensive experience in entrepreneurship. We know
              what it takes to be successful.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl">Bespoke Solutions </h1>
            <p>
              We develop solutions designed to meet the specific needs of your
              business.{" "}
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl">Swiss Core Values </h1>
            <p>
              Our values are at the heart of everything we do, reflecting our
              commitment to quality and responsibility.{" "}
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl">Long-Term Partnership</h1>
            <p>
              We focus on building lasting relationships based on trust and
              collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
