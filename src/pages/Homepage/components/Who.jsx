function Who() {
  return (
    <div className="grid h-screen w-screen grid-cols-[2fr,_1fr] items-center justify-center gap-52 bg-backgroundSections px-80">
      <div className="flex flex-col gap-16">
        <h2 className="font-montserrat text-7xl font-medium uppercase tracking-tight text-headerColor">
          Who am I?
        </h2>
        <ul className="flex flex-col gap-12 text-2xl font-light">
          <li>
            I am Naven. I work as a copywriter, marketer and UX Designer for
            over 5 years now.
          </li>
          <li>
            I decided to connect these three branches of business, because they
            complement each other.
          </li>
          <li>
            By knowing pros and cons of all three branches I am able to create
            with extremally high efficiency.
          </li>
          <li>
            I gained my experience working on projects for many different
            companies, some of which you can see on the right.{" "}
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-16">
        <div>Logo</div>
        <div>Logo</div>
        <div>Logo</div>
        <div>Logo</div>
        <div>Logo</div>
        <div>Logo</div>
      </div>
    </div>
  );
}

export default Who;
