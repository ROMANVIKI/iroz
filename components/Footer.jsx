const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-row max-sm:flex-col justify-center text-center space-y-4 pt-10">
      <div className="space-y-2">
        <h1 className="text-gray-500">Succeeding Together:</h1>
        <h1 className="text-blue-600">Your Goals, Our Mission</h1>
      </div>
      <div className="space-y-2">
        <p>We look forward to hearing from you</p>
        <a href="#" className="text-blue-600 after:content-['_↗']">
          reach.iroz.in
        </a>
        <p className="mt-4">+91 9XXXXXXXXX</p>
      </div>
      <p>Iroz © {year} All rights reserved</p>
    </footer>
  );
};

export default Footer;
