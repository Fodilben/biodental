import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

export const CTA = () => {
  return (
    <section className="w-full py-[60px] md:py-20 bg-[#9aae92] px-8 md:px-0 lg:px-0">
      <Card className="max-w-4xl mx-auto  border-none shadow-none">
        <CardContent className="flex flex-col items-center justify-center space-y-6 text-center p-0">
          <h1 className="text-[34px] md:text-[53px]  font-[1000] text-[#2b3029] tracking-[-0.80px] leading-[55px] font-playfair-important pb-1">
            Prêt à transformer votre sourire?
          </h1>
          <p className="text-[22px]  font-normal text-white ">
            Voir les rendez-vous disponibles et profitez de la dentisterie bien
            faite.
          </p>

          <Button className="mt-4 bg-[#222222] text-white rounded-lg shadow-[0px_0.71px_0.71px_-0.62px_#00000026,0px_1.81px_1.81px_-1.25px_#00000024,0px_3.62px_3.62px_-1.88px_#00000024,0px_6.87px_6.87px_-2.5px_#00000021,0px_13.65px_13.65px_-3.12px_#0000001a,0px_30px_30px_-3.75px_#0000000d] hover:bg-[#333333]">
            <span className="text-[16px] leading-[16px]  font-normal">
              Prendre rendez-vous
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
