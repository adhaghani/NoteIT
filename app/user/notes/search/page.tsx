import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/typograhpy";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle
} from "@/components/ui/minimal-card";

const cards = [
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural."
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural."
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural."
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural."
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural."
  }
];
const SearchPage = () => {
  return (
    <div>
      <Text as="h3" className="mb-4">
        Search Notes
      </Text>
      <div className=" flex justify-center items-center gap-2">
        <Input placeholder="Find your notes..." />
        <Button className="max-w-[250px]">
          <Search />
          Search Notes
        </Button>
      </div>
      <Separator className="my-10" />
      <div className="flex justify-between items-start gap-2">
        <Text as="h3" className="m-0">
          Recent Notes
        </Text>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/user/notes">
            <ArrowLeft />
            View All
          </Link>
        </Button>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <MinimalCard key={index}>
            <MinimalCardImage
              alt="image"
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            />
            <MinimalCardTitle>{card.title}</MinimalCardTitle>
            <MinimalCardDescription>{card.description}</MinimalCardDescription>
          </MinimalCard>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
