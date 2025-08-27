"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  content: string
  rating: number
  photo: string
}

const testimonials: Testimonial[] = [
  {
    id: 2,
    name: "Suzana Alburqueque",
    content: "Excelente atendimento, desde as recepcionistas até a dra Ivana.",
    rating: 5,
    photo: "/Suzana.png",
  },
  {
    id: 3,
    name: "Tia Ruth",
    content:
      "Excelente atendimento, profissionalismo excepcional, atendimento nota 1000 das recepcionistas, ambiente aconchegante. E a Dra. Ivana é uma profissional maravilhosa. Atendimento humanizado, recomendo.",
    rating: 5,
    photo: "/TiaRuth.png",
  },
  {
    id: 4,
    name: "Rafael Chaves",
    content:
      "Super recomendo, são grandes profissionais tanto o Dr. Gustavo como a Dra. Ivana.",
    rating: 5,
    photo: "/RafaelChaves.png",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="relative p-6 bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
        {/* 1) Borda animada girando em sentido anti-horário */}
        <div
          className="absolute -inset-[2px] rounded-lg bg-[conic-gradient(from_0deg,_#3b82f6,_#60a5fa,_#3b82f6)] animate-spin-slow"
          style={{
            animationDuration: '4s',
            animationDirection: 'reverse',
          }}
        />
        {/* 2) Máscara interna */}
        <div className="absolute inset-[2px] rounded-lg bg-gray-50" />

        {/* 3) Conteúdo */}
        <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
          <img
            src={testimonials[current].photo}
            alt={testimonials[current].name}
            className="h-14 w-14 rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-900">{testimonials[current].name}</h3>
          <blockquote className="text-gray-600 italic max-w-md">
            "{testimonials[current].content}"
          </blockquote>
          <div className="flex justify-center">
            {Array(testimonials[current].rating)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
          </div>
        </div>
      </div>

      {/* Controles */}
      <div className="flex justify-center mt-4 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {testimonials.map((_, i) => (
          <Button
            key={i}
            variant="outline"
            size="icon"
            className={`h-2 w-2 rounded-full p-0 ${i === current ? "bg-blue-600 border-blue-600" : ""}`}
            onClick={() => {
              setCurrent(i)
              setAutoplay(false)
            }}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={() => {
            next()
            setAutoplay(false)
          }}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
