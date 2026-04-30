"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

interface TestimonialsProps {
  reviews: Review[];
}

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-200 bg-white hover:bg-gray-50",
        "shadow-md hover:shadow-lg hover:shadow-[#55CDED]/10",
        "transition-all duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-black">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-600 leading-relaxed">
        {body}
      </blockquote>
    </figure>
  );
};

export default function Testimonials({ reviews }: TestimonialsProps) {
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* Fade edges */}
      <div className="from-white pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r" />
      <div className="from-white pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l" />
    </div>
  );
}
