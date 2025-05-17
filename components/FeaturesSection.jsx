import Image from "next/image";
import Button from "./Button";
const FeaturesSection = () => {
  return (
    <section id="feature-section" className="p-4">
      <div className="flex max-md:flex-col space-y-4 items-center justify-center">
        <div className="text-center ">
          <div className="flex justify-center ">
            <Image
              src="/assets/images/img1.png"
              alt="feature section image1"
              width={400}
              height={400}
            />
          </div>
          <div className="space-y-4">
            <h1>Strategy</h1>
            <p>
              Increase your success by supporting the development and
              implementation of your global strategy.
            </p>
            <Button name={"Learn More"} />
          </div>
        </div>
        <div className="text-center pt-8">
          <div className="flex justify-center">
            <Image
              src="/assets/images/img2.png"
              alt="feature section image2"
              width={400}
              height={400}
            />
          </div>
          <div className="space-y-4">
            <h1>Marketing & Branding</h1>
            <p>
              Build a distinctive brand and connect with your target audience.
            </p>
            <Button name={"Learn More"} />
          </div>
        </div>
        <div className="text-center pt-8">
          <div className="flex justify-center">
            <Image
              src="/assets/images/img3.png"
              alt="feature section image3"
              width={400}
              height={400}
            />
          </div>
          <div className="space-y-4">
            <h1>Corporate Services</h1>
            <p>
              The security and reliability you need to run your business with
              confidence.
            </p>
            <Button name={"Learn More"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
