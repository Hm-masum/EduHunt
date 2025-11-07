"use client";

import React from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/constants/testimonial";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const Testimonial = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="my-14">
      <SectionTitle
        title="Trusted"
        subtitle="Real experiences from those who teach and learn with us"
        colorWord="Voice"
      />

      <div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                        alt="@shadcn"
                        className="h-16 w-16"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font font-semibold">
                      {testimonial.name}
                    </h2>
                  </div>
                  <h5>{testimonial.designation}</h5>
                  <div className="flex items-center gap-1">
                    <StarIcon className="text-yellow-500" />
                    <StarIcon className="text-yellow-500" />
                    <StarIcon className="text-yellow-500" />
                    <StarIcon className="text-yellow-500" />
                    <StarIcon className="text-yellow-500" />
                  </div>
                  <p className="md:w-[60%] text-center">
                    {testimonial.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex dark:bg-zinc-900" />
          <CarouselNext className="hidden md:flex dark:bg-zinc-900 " />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
