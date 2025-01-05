import LetterPullup from "@/components/ui/letter-pullup";
import WordPullUp from "@/components/ui/word-pull-up";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lightbulb, Rocket, Target } from "lucide-react";

const AccordionData = [
  {
    title: "Our Expertise",
    content:
      "We specialize in cutting-edge technologies including Web3, Artificial Intelligence, and building scalable solutions. Our team of experts is dedicated to pushing the boundaries of what's possible in the digital realm.",
    icons: <Lightbulb className="w-4 h-4 mr-2 text-yellow-500" />,
  },
  {
    title: "Our Approach",
    content:
      "Innovation and sustainability are at the core of everything we do. We believe in agile methodologies, continuous learning, and collaborative problem-solving to deliver exceptional results for our clients and partners.",
    icons: <Rocket className="w-4 h-4 mr-2 text-yellow-500" />,
  },
  {
    title: "Our Vision",
    content:
      "We envision a future where technology seamlessly integrates with everyday life, enhancing human capabilities and solving global challenges. Our goal is to be at the forefront of this technological revolution, shaping a more connected and efficient world.",
    icons: <Target className="w-4 h-4 mr-2 text-yellow-500" />,
  },
];

export default function LetterPullupDemo() {
  return (
    <div className="min-h-screen py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="space-y-8 text-center">
          <LetterPullup
            words={"Innovating For A Better Tomorrow"}
            delay={0.05}
          />

          <div className="max-w-3xl mx-auto">
            <WordPullUp>
              We're on a mission to revolutionize technology and create
              solutions that empower businesses and individuals alike.
            </WordPullUp>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {AccordionData.map((yash, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 shadow-sm group bg-gradient-to-r from-blue-500/10 to-yellow-500/10"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center">
                    {yash.icons}
                    <span className="text-sm font-medium">{yash.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 rounded-b-lg transition-all duration-500">
                  <p className="text-sm text-gray-300">{yash.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
