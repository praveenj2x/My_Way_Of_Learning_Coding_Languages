const Footer = () => {
  return (
    <>
      <footer className="w-full py-6 text-center text-sm outfit opacity-70">
        <div className="flex flex-row justify-between px-[1%]">
          <div className="flex flex-col gap-2">
            <p>© 2024 Note App. All rights reserved.</p>
          </div>
          <div className="flex flex-row gap-2 ml-8">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Github
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              LinkedIn
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              X
            </a>
          </div>
        </div>
      </footer>

      <span className="left-[10%] w-full border-b-2 border-dotted border-current opacity-50"></span>
      <div className="flex justify-center align-baseline text-9xl ">
        K2XS
      </div>
    </>
  );
};

export default Footer;
