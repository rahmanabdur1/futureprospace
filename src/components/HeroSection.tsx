"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date (45 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/60" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60" />
        <div
          className="animate-float absolute top-40 right-20 w-6 h-6 bg-accent rounded-full opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="animate-float absolute bottom-32 left-1/4 w-3 h-3 bg-primary rounded-full opacity-80"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="animate-float absolute top-1/3 right-1/3 w-5 h-5 bg-primary rounded-full opacity-50"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
          Enter the gateway of{" "}
          <span className="gradient-primary bg-clip-text text-transparent">
            Future Pro Space Blockchain Platform
          </span>
        </h1>

       

        {/* PDF Button */}
        <div className="flex justify-center gap-4">
          <h2 className=" text-3xl md:text-4xl font-bold  mb-1 gradient-primary bg-clip-text text-transparent">
            Registration Starts In
          </h2>
          <a
            href="/Future-Pro.Space.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 glow-effect animate-pulse-glow group"
            >
              Download PDF
              <FileDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-6 text-center">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((unit, index) => (
            <div
              key={index}
              className="glass-card px-6 py-4 rounded-xl glow-effect"
            >
              <div className="text-4xl font-bold text-primary mb-1">
                {unit.value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm uppercase tracking-wide text-muted-foreground">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

    
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Potential Projects</div>
          </div>
          <div className="glass-card p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">$570B</div>
            <div className="text-muted-foreground">Market Cap</div>
          </div>
          <div className="glass-card p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">400K</div>
            <div className="text-muted-foreground">Investors</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
