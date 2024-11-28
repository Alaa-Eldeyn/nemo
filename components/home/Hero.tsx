import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="z-20">
        <h1 className="max-w-2xl text-orange-600 font-black text-4xl tracking-tight sm:text-6xl font-tajawal">
          السمك صحاب
          <br />
          <span className="text-primary">مش طواجن</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground font-tajawal">
          متجر الكتروني يقدم لكم أجمل أنواع سمك الزينة بأعلى جودة وأفضل الأسعار
          والعروض المميزة والتوصيل لجميع المحافظات.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">تصفح المنتجات</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
