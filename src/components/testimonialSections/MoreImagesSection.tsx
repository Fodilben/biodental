const moreImgs = [
  "/more-imgs/more1.avif",
  "/more-imgs/more2.avif",
  "/more-imgs/more3.avif",
];

const MoreImagesSection = () => (
  <section className="w-full bg-[#9aae92] py-16">
    <h2 className="w-[268px] mx-auto pt-[75px] [font-family:'Playfair_Display',Helvetica] font-black text-[#2b3029] text-[50px] tracking-[-0.80px] leading-[60px] text-center">
      Et plus…
    </h2>
    <div
      className="grid grid-cols-3  max-w-6xl mx-auto mt-16 px-4"
      style={{
        rowGap: "60px",
      }}
    >
      <div
        className="col-span-2 max-h-[350px]"
        style={{ marginRight: "110px" }}
      >
        <img
          src={moreImgs[0]}
          alt="Gallery image 1"
          className="rounded-4xl object-cover w-full h-full"
        />
      </div>
      <div
        className="col-start-3 max-h-[330px]"
        style={{ marginTop: "20px" }}
      >
        <img
          src={moreImgs[1]}
          alt="Gallery image 2"
          className="rounded-4xl object-cover w-full h-full"
        />
      </div>
      <div className="row-span-2 row-start-2 " style={{ marginRight: "20px" }}>
        <img
          src={moreImgs[2]}
          alt="Gallery image 3"
          className="rounded-4xl object-cover w-full h-full"
        />
      </div>
      <div
        className="col-span-2 row-start-2 max-h-[350px]"
        style={{ marginRight: "50px", marginLeft: "20px" }}
      >
        <img
          src={moreImgs[0]}
          alt="Gallery image 4"
          className="rounded-4xl object-cover w-full h-full"
        />
      </div>
      <div
        className="col-span-2 col-start-2 row-start-3 max-h-[350px]"
        style={{ marginRight: "70px", marginLeft: "20px" }}
      >
        <img
          src={moreImgs[1]}
          alt="Gallery image 5"
          className="rounded-4xl object-cover w-full h-full"
        />
      </div>
    </div>
  </section>
);

export default MoreImagesSection;
