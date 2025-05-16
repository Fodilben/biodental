import Image from "next/image";

const OurHome = () => {
  return (
    <section className="w-full py-20 bg-[#9aae92]">
      <div className="container max-w-[1000px] mx-auto flex flex-col md:flex-row items-start gap-[100px]">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center h-[380px]">
          <h2 className="font-playfair-important font-bold text-[#2b3029] text-[45.5px] tracking-[-0.80px] leading-[60px] mb-2">
            Notre vision
          </h2>
          <p className="text-[#f7f7f5] font-medium text-[21px] max-w-[400px] mt-0">
            Redéfinir la dentisterie comme une expérience sereine et humaine —
            où les patients se sentent sincèrement pris en charge, confiants
            dans leur sourire et connectés à une forme plus naturelle de santé
            et de beauté.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-end items-start">
          <div className="w-[480px] h-[380px] rounded-[32px] overflow-hidden">
            <Image
              src="/ourhome/home1.png"
              alt="Dental chair"
              width={480}
              height={340}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="container max-w-[1000px] mx-auto flex flex-col md:flex-row items-start gap-[100px] pt-24">
        {/* Left: Text */}
        <div className="flex-1 flex justify-end items-start">
          <div className="w-[480px] h-[380px] rounded-[32px] overflow-hidden">
            <Image
              src="/ourhome/home2.png"
              alt="Dental chair"
              width={480}
              height={340}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center h-[380px]">
          <h2 className="font-playfair-important font-bold text-[#2b3029] text-[45.5px] tracking-[-0.80px] leading-[60px] mb-2">
            Notre mission
          </h2>
          <p className="text-[#f7f7f5] font-medium text-[21px] max-w-[400px] mt-0">
            Offrir des soins dentaires précis et naturels, entièrement axés sur
            la santé et le confort de nos patients — alliant expertise moderne,
            empathie et simplicité esthétique.
          </p>
        </div>
        {/* Right: Image */}
      </div>
    </section>
  );
};

export default OurHome;
