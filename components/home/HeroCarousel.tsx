import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import hero1 from "@/public/hero1.jpg";
import hero2 from "@/public/hero2.webp";
import hero3 from "@/public/hero3.webp";
import hero4 from "@/public/hero4.webp";

const carouselImages = [hero2, hero1, hero3, hero4];

function HeroCarousel() {
  return (
    <div className="hidden lg:block select-none">
      <Carousel dir="ltr">
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={image}
                      alt="hero"
                      className="w-full h-[24rem] rounded-lg object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
