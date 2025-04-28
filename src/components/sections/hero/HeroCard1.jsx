const CardComponent = () => {
  return (
    <div className="hover:shadow-primary-200 relative mt-14 cursor-pointer rounded-[24px] bg-white p-[32px] shadow-lg transition-all duration-300 hover:shadow-md">
      <div className="absolute top-0 left-1/2 flex h-28 w-28 -translate-1/2 transform items-center justify-center rounded-full border-8 border-sky-800 shadow-lg shadow-white">
        <div className="bg-primary-800 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white p-4">
          <img
            className="h-full w-full object-cover"
            src="/public/heroImages/hero-card-1.png"
            alt="HeroCard1"
          />
        </div>
      </div>

      <div className="pt-14">
        <h5 className="font-ubuntu text-xl font-medium">
          Master In-Demand Digital Skills to Advance Your Career
        </h5>
        <p className="font-ubuntu mt-5 text-[16px] leading-7">
          Unlock career opportunities through our industry-recognized Digital
          Skill Development program. Begin your journey today with 300 local
          partners to stay ahead of the curve!
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
