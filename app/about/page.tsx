import LetterPullup from "@/components/ui/letter-pullup";
import WordPullUp from "@/components/ui/word-pull-up";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lightbulb, Rocket, Target } from "lucide-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";
import Ripple from "@/components/ui/ripple";
import { SparklesCore } from "@/components/ui/sparkles";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
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
                className="border rounded-lg px-6 shadow-sm group bg-gradient-to-r from-black-500/10 to-gray-500/10"
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
      <div className="mt-20">
        <h3 className="text-3xl font-medium text-gray-200 text-center my-6">
          Meet Our Team
        </h3>

        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}
