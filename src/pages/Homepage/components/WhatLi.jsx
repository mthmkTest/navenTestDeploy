function WhatLi({ icon, header, paragraph }) {
  return (
    <li>
      <div className="flex flex-col items-center gap-6">
        <div>
          <div className="h-52 w-52 overflow-hidden rounded-full bg-gradient-to-r from-roundedBorderColor3 via-roundedBorderColor2 to-roundedBorderColor1 p-2">
            <div className="back flex h-full w-full items-center justify-center rounded-full bg-mainColor">
              <div className="text-8xl font-black text-headerColor">{icon}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <h2 className="place-self-center text-4xl text-white">{header}</h2>
          <p className="place-self-center text-center text-xl text-gray-300">
            {paragraph}
          </p>
        </div>
      </div>
    </li>
  );
}

export default WhatLi;
