import Image from "next/image";
import CabinetImages from "./CabinetImages";

const Cabinet = () => {
  return (
    <section className="w-full p-[20px] md:py-20 bg-[#9aae92]">
      <div className="max-w-[1000px] mx-auto">
        <div className="w-full text-center ">
          <h1 className="font-playfair-important  font-bold text-[#2b3029] text-[34px] md:text-[2.6rem] md:tracking-[-0.8px] leading-tight">
            Où le confort rencontre l'art.
          </h1>
        </div>
        {/* Cabinet images */}
       <CabinetImages/>
      </div>
    </section>
  );
};

export default Cabinet;