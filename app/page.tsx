"use client"

import Link from "next/link"
import {
  ChevronRight,
  Phone,
  MapPin,
  CheckCircle2,
  Users,
  Sparkles,
  SmileIcon as Tooth,
  Stethoscope,
  Calendar,
  Clock,
  Award,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ProcedureCard from "@/components/procedure-card"
import TestimonialSlider from "@/components/testimonial-slider"
import ValeHighlight from "@/components/vale-highlight"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import WhatsAppButton from "@/components/whatsappbutton"

const whatsappLink =
  "https://wa.me/+5594981067623?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  console.log("mobileOpen:", mobileOpen);
  return (
    <div className="flex min-h-screen flex-col">
       <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/cliniodonto-logo.png" alt="Logo CliniOdonto" className="h-10 w-auto" />
          <span className="text-xl md:text-2xl font-bold text-blue-900/90">CliniOdonto</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6">
          <Link href="#sobre" className="text-base font-semibold hover:text-blue-600 transition-colors">Sobre</Link>
          <Link href="#historia" className="text-base font-semibold hover:text-blue-600 transition-colors">História</Link>
          <Link href="#equipe" className="text-base font-semibold hover:text-blue-600 transition-colors">Equipe</Link>
          <Link href="#procedimentos" className="text-base font-semibold hover:text-blue-600 transition-colors">Procedimentos</Link>
          <Link href="#depoimentos" className="text-base font-semibold hover:text-blue-600 transition-colors">Depoimentos</Link>
          <Link href="#contato" className="text-base font-semibold hover:text-blue-600 transition-colors">Contato</Link>
        </nav>

        {/* Botões Desktop */}
        <div className="hidden md:flex gap-2">
          <Button
            variant="outline"
            className="text-sm font-semibold text-blue-900 border-blue-900 hover:bg-blue-100 px-2"
            onClick={() =>
              window.open(
                "https://wa.me/+559481067623?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20do%20conv%C3%AAnio!",
                "_blank"
              )
            }
          >
            <img
              src="/logovale.png"
              alt="Convênio Vale"
              className="h-10 w-10 mr-2 object-contain rounded-full"
            />
            Aceitamos Vale
          </Button>
          <Button
            className="bg-blue-900/90 hover:bg-blue-700"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <Phone className="mr-2 h-4 w-4" />
            Agendar Consulta
          </Button>
        </div>

        {/* Botão Mobile (menu hambúrguer) */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setMobileOpen(true)}>
            <Menu className="h-12 w-12 text-blue-900" strokeWidth={4} />
          </Button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 flex flex-col gap-4 md:hidden">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-blue-900">Menu</span>
            <Button variant="ghost" onClick={() => setMobileOpen(false)}>
              <X className="h-6 w-6 text-blue-900" />
            </Button>
          </div>
      <Link href="#sobre" onClick={() => setMobileOpen(false)} className="font-bold">Sobre</Link>
      <Link href="#historia" onClick={() => setMobileOpen(false)} className="font-bold">História</Link>
      <Link href="#equipe" onClick={() => setMobileOpen(false)} className="font-bold">Equipe</Link>
      <Link href="#procedimentos" onClick={() => setMobileOpen(false)} className="font-bold">Procedimentos</Link>
      <Link href="#depoimentos" onClick={() => setMobileOpen(false)} className="font-bold">Depoimentos</Link>
      <Link href="#contato" onClick={() => setMobileOpen(false)} className="font-bold">Contato</Link>

            <Button
            variant="outline"
            className="text-blue-900 border-blue-900 flex items-center"
            onClick={() =>
              window.open(
                "https://wa.me/+559481067623?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20do%20conv%C3%AAnio!",
                "_blank"
              )
            }
          >
            <img src="/logovale.png" alt="Logo Vale" className="w-12 h-6 mr-1" />
            <span>Aceitamos Vale</span>
          </Button>
          <Button
            className="bg-blue-900/90 hover:bg-blue-700"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <Phone className="mr-2 h-4 w-4" />
            Agendar Consulta
          </Button>
        </div>
      )}
    </header>

      <main className="flex-1">
        {/* Hero Section - Redesenhada sem background de imagem */}
          <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-deepBlue to-blue-900 [length:200%_200%] animate-gradient-x z-10"></div>


          <div className="container relative z-20 px-4 py-16 md:py-24 lg:py-20 md:px-6 text-white">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Seu sorriso merece o melhor cuidado
                </h1>
                <p className="max-w-[600px] text-white/80 text-lg md:text-xl">
                  A CliniOdonto oferece tratamentos odontológicos de excelência com profissionais altamente qualificados
                  para cuidar da sua saúde bucal.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-green-500 text-white hover:bg-white/20"
                    onClick={() => window.open(whatsappLink, "_blank")}
                  >
                    Agendar Consulta <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  {/* Botão visível só no DESKTOP */}
                  <div className="hidden md:block">
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-blue-500 text-white hover:bg-white/20"
                    >
                      <a href="#procedimentos">
                        <Calendar className="mr-2 h-5 w-5" />
                        Conhecer Serviços
                      </a>
                    </Button>
                  </div>

                  {/* Alternativa visível só no MOBILE */}
                  <div className="block md:hidden">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white text-deepBlue hover:bg-white/20 flex items-center gap-2"
                  >
                    <a
                      href="https://wa.me/+559481067623?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20do%20conv%C3%AAnio!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Aceitamos Convênio
                      <img src="/logovale.png" alt="Logo" className="h-5 w-auto" />
                    </a>
                  </Button>
                </div>

                </div>

                {/* Estrelas - versão desktop */} 
                <div className="hidden lg:flex items-center pt-4">
                  <div className="ml-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-5 w-5 fill-current text-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-white/80 italic">Resultados que transformam sorrisos</p>
                  </div>
                </div>
              </div>

            <div className="relative flex justify-center items-end w-full px-4">
              {/* Fundo branco com blur */}
              <div className="absolute inset-y-0 left-4 right-4 rounded-2xl bg-white blur-sm z-0"></div>

              {/* Container do gradiente e imagem */}
            <div className="relative z-10 rounded-xl overflow-hidden bg-gradient-to-r from-deepBlue to-blue-900 px-6 sm:px-10 md:px-12 lg:px-16 py-4 w-full max-w-6xl">
              <div className="w-full max-w-[500px] mx-auto">
                <img
                  src="/equipe-cliniodonto.png"
                  alt="Equipe CliniOdonto"
                  className="w-full h-auto -mb-4"
                />
              </div>
            </div>
              {/* Texto fixado na parte inferior direita */}
         <div className="absolute bottom right-4 sm:bottom sm:right-6 bg-blue-500 text-white p-2 sm:p-4 rounded-lg shadow-lg z-20 text-center sm:text-left max-w-[200px] sm:max-w-none">
            <p className="text-sm sm:text-lg font-bold">Excelência em Odontologia</p>
            <p className="text-xs sm:text-base">Seu sorriso em boas mãos</p>
          </div>

            </div>
            </div>

              {/* Estrelas - versão mobile */}
         {/* Estrelas - versão mobile à esquerda */}
            <div className="flex lg:hidden flex-col items-start mt-6 z-20 px-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 fill-current text-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-white/80 mt-1 italic">Resultados que transformam sorrisos</p>
            </div>


          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Sobre Nós</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Conheça a CliniOdonto</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Somos uma clínica odontológica completa, focada em oferecer tratamentos de qualidade com profissionais
                  altamente qualificados. Nossa missão é proporcionar saúde bucal e sorrisos bonitos para todos os
                  nossos pacientes.
                </p>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                   <div className="relative p-6 bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        {/* 1) Borda animada: */}
                        <div
                          className="absolute -inset-[2px] rounded-lg bg-[conic-gradient(from_0deg,_#3b82f6,_#60a5fa,_#3b82f6)] animate-spin-slow"
                          style={{ animationDuration: '4s' }}
                        />
                        {/* 2) Máscara interna para cobrir o degradê exceto na borda: */}
                        <div className="absolute inset-[2px] rounded-lg bg-gray-50" />
                        {/* 3) Conteúdo da caixa: */}
                        <div className="relative flex flex-col items-center space-y-2">
                          <Users className="h-10 w-10 text-blue-600" />
                          <h3 className="text-xl font-bold">Equipe Especializada</h3>
                          <p className="text-gray-500 text-center">
                            Profissionais com ampla experiência e formação nas melhores instituições.
                          </p>
                        </div>
                    </div>

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
              <div className="relative flex flex-col items-center space-y-2">
                <Sparkles className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold">Tecnologia Avançada</h3>
                <p className="text-gray-500 text-center">
                  Equipamentos modernos para diagnósticos precisos e tratamentos eficientes.
                </p>
              </div>
            </div>



               <div className="relative p-6 bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                {/* 1) Borda animada */}
                <div
                  className="absolute -inset-[2px] rounded-lg bg-[conic-gradient(from_0deg,_#3b82f6,_#60a5fa,_#3b82f6)] animate-spin-slow"
                  style={{ animationDuration: '4s' }}
                />
                {/* 2) Máscara interna */}
                <div className="absolute inset-[2px] rounded-lg bg-gray-50" />
                {/* 3) Conteúdo */}
                <div className="relative flex flex-col items-center space-y-2">
                  <CheckCircle2 className="h-10 w-10 text-blue-600" />
                  <h3 className="text-xl font-bold">Atendimento Humanizado</h3>
                  <p className="text-gray-500 text-center">
                    Cuidado personalizado para garantir conforto e satisfação dos pacientes.
                  </p>
                </div>
              </div>

              </div>
            </div>
          </div>
        </section>

          {/* História da Clínica Section */}
           <section
              id="historia"
              className="relative w-full py-16 md:py-8 
                        bg-gradient-to-r from-deepBlue to-blue-800
                        md:from-deepBlue md:to-blue-800 overflow-hidden"
            >

              {/* Bolinhas brancas dinâmicas adicionais */}
            <div className="absolute top-8 left-16 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse" />
            <div className="absolute top-20 right-20 w-4 h-4 bg-white rounded-full opacity-50 animate-ping" />
            <div className="absolute bottom-16 left-8 w-3 h-3 bg-white rounded-full opacity-40 animate-ping" />
            <div className="absolute bottom-24 right-12 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse" />
            <div className="absolute top-1/4 left-1/3 w-5 h-5 bg-white rounded-full opacity-25 animate-ping" />
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full opacity-35 animate-pulse" />
            <div className="absolute bottom-8 left-1/2 w-4 h-4 bg-white rounded-full opacity-45 animate-ping" />
            <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse" />


              <div className="container relative px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                  {/* Imagem com borda e sombra difusa */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-400 opacity-70 blur-sm" />
                    <div className="relative rounded-xl overflow-hidden bg-white p-1">
                      <img
                        src="/clinica.png"
                        alt="Clínica CliniOdonto"
                        className="w-full h-auto rounded-lg max-h-[400px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Texto e dados */}
                  <div className="relative space-y-6 text-white text-center sm:text-left">
                    <div className="inline-block rounded-lg bg-white/30 px-3 py-1 text-sm text-white">
                      Nossa História
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      Quem Somos
                    </h2>
                    <p className="text-lg">
                      Há mais de duas décadas, nossa clínica é referência em cuidado,
                      excelência e confiança. Desde o início da nossa trajetória, temos
                      como missão oferecer tratamentos de alta qualidade, com tecnologia
                      atualizada e um atendimento acolhedor e ético.
                    </p>
                    <p className="text-lg">
                      Ao longo dos anos, construímos mais do que uma clínica: formamos
                      vínculos duradouros com os pacientes, que hoje fazem parte da nossa
                      história. Aqui você encontra segurança, comprometimento e a tradição
                      de quem cuida de sorrisos há mais de 20 anos.
                    </p>

                {/* Estatísticas */}

                {/* Horário */}
                <div className="flex items-center space-x-4 pt-4 text-left">
                  <Clock className="h-6 w-6 text-white" />
                  <div>
                    <h4 className="font-semibold text-white">Horário de Funcionamento</h4>
                    <p className="text-white/80">
                      Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h
                    </p>
                  </div>
                </div>


                  </div>
                </div>
              </div>
            </section>

          {/* Equipe Section */}
          <section id="equipe" className="relative w-full py-16 md:py-17 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Nossa Equipe</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    Conheça Nossos Especialistas
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Profissionais altamente qualificados e dedicados a cuidar da sua saúde bucal com excelência.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center px-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card Dentista - Componentizado para repetição clara */}
                {[
                  {
                    nome: "Dr. Gustavo Brandão",
                    cro: "CRO 3718",
                    descricao: "Especialista em Ortodontia e Endodontia.",
                    img: "/gustavo.png",
                    tags: ["Ortodontia", "Clínica Geral", "Endodontia"],
                  },
                  {
                    nome: "Dra. Ivana C Gomes",
                    cro: "CRO 3719",
                    descricao: "Especialista em Ortodontia, Pós Graduação em Estética Dental e Clínica Geral",
                    img: "/ivana.png",
                    tags: ["Ortodontia", "Estética", "Clínica Geral"],
                  },
                  {
                    nome: "Dra. Thassiana Azevedo",
                    cro: "CRO 7588",
                    descricao: "Clínica Geral.",
                    img: "/thassiana.png",
                    tags: ["Clareamento", "Tratamento de Canal", "Endodontia"],

                  },
                ].map((dentista, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-xl border-2 border-blue-500 bg-white shadow-md transition-all hover:shadow-lg flex flex-col w-full"
                  >
                   <div className="h-[260px] w-full bg-white flex items-center justify-center">
                    <img
                      src={dentista.img}
                      alt={dentista.nome}
                      className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{dentista.nome}</h3>
                        <p className="text-sm text-blue-600 font-medium mb-2">{dentista.cro}</p>
                        <p className="text-gray-500 mb-3 text-sm">{dentista.descricao}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {dentista.tags.map((tag, j) => (
                            <span
                              key={j}
                              className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                  
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-500 mb-6">
                  Nossa equipe também conta com auxiliares e recepcionistas para oferecer o melhor atendimento.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => window.open(whatsappLink, "_blank")}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </section>

          {/* Procedimentos Section */}
          <section id="procedimentos" className="w-full py-16 md:py-24 bg-gradient-to-r from-teal-600 to-deepBlue">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    Nossos Serviços
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                    Procedimentos Odontológicos
                  </h2>
                  <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Oferecemos uma ampla gama de tratamentos odontológicos para cuidar da sua saúde bucal.
                  </p>
                </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
                <div className="w-full md:w-auto rounded-xl transition-all duration-500 hover:shadow-lg hover:shadow-blue-300">
                  <ProcedureCard
                    title="Tratamento de Canal"
                    description="Procedimento para remover a infecção da polpa do dente e preservar a estrutura dental."
                    icon={<Tooth className="h-10 w-10 text-blue-600" />}
                  />
                </div>

                <div className="w-full md:w-auto rounded-xl transition-all duration-500 hover:shadow-lg hover:shadow-blue-300">
                  <ProcedureCard
                    title="Limpeza"
                    description="Remoção de placa bacteriana e tártaro para prevenir cáries e doenças gengivais."
                    icon={<Sparkles className="h-10 w-10 text-blue-600" />}
                  />
                </div>

                <div className="w-full md:w-auto rounded-xl transition-all duration-500 hover:shadow-lg hover:shadow-blue-300">
                  <ProcedureCard
                    title="Clareamento"
                    description="Técnicas avançadas para deixar seus dentes mais brancos e seu sorriso mais bonito."
                    icon={<Sparkles className="h-10 w-10 text-blue-600" />}
                  />
                </div>
              </div>

              {/* Linha com os dois últimos centralizados */}
              <div className="mt-6 flex flex-col md:flex-row justify-center gap-6 items-center">
                <div className="w-full md:w-[430px] rounded-xl transition-all duration-500 hover:shadow-lg hover:shadow-blue-300">
                  <ProcedureCard
                    title="Ortodontia"
                    description="Correção do posicionamento dos dentes e maxilares para melhorar a função e estética."
                    icon={<Tooth className="h-10 w-10 text-blue-600" />}
                  />
                </div>

                <div className="w-full md:w-[430px] rounded-xl transition-all duration-500 hover:shadow-lg hover:shadow-blue-300">
                  <ProcedureCard
                    title="Clínico Geral"
                    description="Diagnóstico, prevenção e tratamento das principais doenças bucais."
                    icon={<Stethoscope className="h-10 w-10 text-blue-600" />}
                  />
                </div>
              </div>



       
              </div>
            </div>
          </section>


        {/* Depoimentos Section */}
        <section id="depoimentos" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Depoimentos</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  O que nossos pacientes dizem
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Confira a experiência de quem já passou pela CliniOdonto.
                </p>
              </div>
              <div className="w-full max-w-4xl mt-8">
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </section>


                <section id="contato" className="w-full py-16 bg-gradient-to-r from-deepBlue to-teal-600">
                      <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
                {/* Mapa no lugar da imagem */}
                <div className="rounded-lg overflow-hidden shadow-md h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1990141766493!2d-49.8933505!3d-6.0690907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e5cd14e2f67bfb%3A0x7b9d1e7ae6b8c17e!2sRua%20F%2C%20108%20-%20Uni%C3%A3o%2C%20Parauapebas%20-%20PA%2C%2068515-000!5e0!3m2!1spt-BR!2sbr!4v1716824273914!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Conteúdo de texto */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-black">Localização e Horário</h2>
                  <p className="text-white">Estamos localizados em um ponto de fácil acesso em Parauapebas/PA!</p>

                  <div>
                    <h3 className="font-semibold text-black mb-1">📍 Endereço</h3>
                    <p className="text-white">
                      Rua F, nº 108 - União<br />
                      Parauapebas/PA - CEP 68515-000
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-black mb-1">📆 Horário de Funcionamento</h3>
                    <p className="text-white">
                      Segunda a Sexta: 8:00 às 12:00 | 14:00 às 18:00<br />
                      Sábados: 8:00 às 12:00
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-black mb-1">📞 Contato</h3>
                    <p className="text-white">(94) 98106-7623</p>
                  </div>

                  <Button
                    size="lg"
                    className="bg-blue-600 text-white hover:bg-blue-800"
                    onClick={() => window.open("https://wa.me/+5594981067623?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es", "_blank")}
                  >
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            </section>
      </main>
              <WhatsAppButton />

      {/* Footer */}
      <footer className="w-full border-t bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/vale-logo-blue.png" alt="Logo Vale" className="h-10 w-auto" />
                <h3 className="text-xl font-bold">CliniOdonto</h3>
              </div>
              <p className="text-gray-400">Cuidando do seu sorriso com excelência e tecnologia.</p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/cliniodonto" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/cliniodonto/" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
               
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#procedimentos" className="text-gray-400 hover:text-white">
                    Tratamento de Canal
                  </Link>
                </li>
                <li>
                  <Link href="#procedimentos" className="text-gray-400 hover:text-white">
                    Limpeza
                  </Link>
                </li>
                <li>
                  <Link href="#procedimentos" className="text-gray-400 hover:text-white">
                    Clareamento
                  </Link>
                </li>
                <li>
                  <Link href="#procedimentos" className="text-gray-400 hover:text-white">
                    Ortodontia
                  </Link>
                </li>
                <li>
                  <Link href="#procedimentos" className="text-gray-400 hover:text-white">
                    Clínico Geral
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Links Úteis</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#sobre" className="text-gray-400 hover:text-white">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#historia" className="text-gray-400 hover:text-white">
                    História
                  </Link>
                </li>
                <li>
                  <Link href="#equipe" className="text-gray-400 hover:text-white">
                    Equipe
                  </Link>
                </li>
                  <li>
                  <Link href="#procedimentos" className="text-gray-400 hover:text-white">
                    Procedimentos
                  </Link>
                </li>
                 <li>
                  <Link href="#depoimentos" className="text-gray-400 hover:text-white">
                    Depoimentos
                  </Link>
                </li>
                 <li>
                  <Link href="#contato" className="text-gray-400 hover:text-white">
                    Contato
                  </Link>
                </li>

              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                  <span className="text-gray-400">Rua F, número 108 - Bairro União, Parauapebas - PA</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                  <span className="text-gray-400">(94) 98106-7623</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span>Parceria oficial</span>
              <div className="h-8 w-8 rounded-full bg-white shadow-xl flex items-center justify-center p-1 overflow-visible">
                <img src="/vale-logo-blue.png" alt="Vale" className="h-6 w-auto" />
              </div>
            </div>
            <p>© 2025 CliniOdonto. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

