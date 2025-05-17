import Image from "next/image";
import Button from "./Button";

const FeaturesSection = () => {
  return (
    <section
      id="feature-section"
      className="bg-gray-50 dark:bg-gray-900 py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Feature Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-6">
              <Image
                src="/assets/images/img1.png"
                alt="feature section image1"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Strategy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Increase your success by supporting the development and
              implementation of your global strategy.
            </p>
            <Button name="Learn More" />
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-6">
              <Image
                src="/assets/images/img2.png"
                alt="feature section image2"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Marketing & Branding
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Build a distinctive brand and connect with your target audience.
            </p>
            <Button name="Learn More" />
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-6">
              <Image
                src="/assets/images/img3.png"
                alt="feature section image3"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Corporate Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              The security and reliability you need to run your business with
              confidence.
            </p>
            <Button name="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
