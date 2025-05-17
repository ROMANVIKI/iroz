const Benefits = () => {
  return (
    <section id="benefits" className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-indigo-600 font-semibold uppercase tracking-widest mb-2">
          Our Unique Approach
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Your Benefits
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Entrepreneurial Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Benefit from our extensive experience in entrepreneurship. We know
              what it takes to be successful.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Bespoke Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              We develop solutions designed to meet the specific needs of your
              business.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Swiss Core Values
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Our values are at the heart of everything we do, reflecting our
              commitment to quality and responsibility.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Long-Term Partnership
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
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
