const Heading = ({ className, title }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {title && <h2 className="h2 text-n-8 font-bold">{title}</h2>}
    </div>
  );
};

export default Heading;
