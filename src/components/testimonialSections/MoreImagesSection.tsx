import Image from "next/image";
const moreImgs = [
  "/more-imgs/more1.avif",
  "/more-imgs/more2.avif",
  "/more-imgs/more3.avif",
  // Add more images if needed
];

const MoreImagesSection = () => (
  <section className="w-full p-[20px] md:py-20 bg-[#9aae92]">
    <div className="max-w-[1100px] mx-auto">
      <div className="w-full text-center ">
        <h1 className="font-playfair-important  font-bold text-[#2b3029] text-[34px] md:text-[2.6rem] md:tracking-[-0.8px] leading-tight">
          Et plus…
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 w-full gap-[50px] py-10">
        {/* Left: Images stacked vertically */}
        <div
          className="w-full md:col-span-2 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md"
          style={{ marginRight: "100px" }}
        >
          <Image
            src="/cabinet/cabinet1.png"
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-3 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet2.png"
            alt="Salle d'attente"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-12">
        <div className="w-full h-[630px] md:row-span-2 rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet3.png"
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-span-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet4.png"
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-span-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet4.png"
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

export default MoreImagesSection;
