"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Script from "next/script"
import Image from "next/image"

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [currentKitSlide, setCurrentKitSlide] = useState(2)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  // </CHANGE>

  const totalSlides = 3
  const totalKitSlides = 7

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: "200px", // Load video 200px before it enters viewport
      },
    )

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current)
    }

    return () => observer.disconnect()
  }, [])
  // </CHANGE>

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 10000) // Increased from 8000 to 10000 to reduce re-renders
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKitSlide((prev) => (prev + 1) % totalKitSlides)
    }, 10000) // Increased from 7000 to 10000 to reduce re-renders
    return () => clearInterval(interval)
  }, [])

  const scrollToCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const ctaSection = document.getElementById("purchase-button")
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const testimonialImages = [
    "https://i.ibb.co/rf4vhWRG/imgi-18-Whats-App-Image-2025-08-07-at-13-02-34.jpg",
    "https://i.ibb.co/V0C26mGT/imgi-19-Whats-App-Image-2025-08-07-at-13-02-34-1.jpg",
    "https://i.ibb.co/rRwPQRqS/imgi-20-Whats-App-Image-2025-08-07-at-13-02-34-2.jpg",
  ]

  const kitImages = [
    "https://i.ibb.co/jvC4Yp1r/imgi-8-Whats-App-Image-2025-08-07-at-16-04-03.jpg",
    "https://i.ibb.co/ymnM6L9g/imgi-28-Any-Conv-com-Caderno-de-Atividades-Grafismos-Foneticos-Nivel-2-1.webp",
    "https://i.ibb.co/k6DjB9k1/imgi-27-Any-Conv-com-Caderno-de-Atividades-Grafismos-Foneticos-Nivel-l.webp",
    "https://i.ibb.co/B2QNXZKg/imgi-24-Any-Conv-com-Caderno-de-Atividades-Grafismos-Foneticos-Nivel-l-3.webp",
    "https://i.ibb.co/Y6RXksV/imgi-23-Any-Conv-com-Caderno-de-Atividades-Grafismos-Foneticos-Nivel-l-1.webp",
    "https://i.ibb.co/twCpCDSr/imgi-22-Any-Conv-com-Caderno-de-Atividades-Grafismos-Foneticos-Nivel-2.webp",
    "https://i.ibb.co/208VpQx7/imgi-21-Any-Conv-com-Caderno-de-Atividades-Grafismos-Foneticos-Nivel-l-2.webp",
  ]

  const faqs = [
    {
      question: "1. O que é exatamente o Kit Atividades Grafismo Fonético?",
      answer:
        "É um conjunto de atividades educativas, organizadas em 3 níveis de aprendizagem, que ajudam as crianças a desenvolverem escrita, leitura e consciência fonológica de forma lúdica. Inclui ainda 8 bónus exclusivos e uma vídeo aula com o passo a passo para aplicar tudo corretamente.",
      color: "blue",
    },
    {
      question: "2. Para que idades é indicado?",
      answer:
        "O Kit foi desenvolvido para crianças dos 2 aos 10 anos. Os materiais são adaptados por níveis, de forma que cada criança evolui ao seu ritmo.",
      color: "purple",
    },
    {
      question: "3. Preciso ser professor para aplicar o Kit?",
      answer:
        "Não 😊 O Kit foi pensado para pais, educadores e terapeutas, mas qualquer pessoa pode aplicá-lo em casa, mesmo sem formação na área. A vídeo aula explica tudo de forma simples.",
      color: "green",
    },
    {
      question: "4. Como recebo o Kit após a compra?",
      answer:
        "Assim que o pagamento for confirmado, vais receber um e-mail com todos os materiais digitais (em PDF) e a vídeo aula. É rápido, prático e podes usar imediatamente.",
      color: "orange",
    },
    {
      question: "5. Preciso de imprimir as atividades?",
      answer:
        "Sim. As atividades foram criadas para serem impressas, para que a criança possa escrever, desenhar e treinar. Podes imprimir em casa ou numa gráfica.",
      color: "pink",
    },
    {
      question: "6. O Kit é uma assinatura ou pagamento único?",
      answer: "É um pagamento único de apenas 19,90€. Não existem taxas adicionais nem mensalidades.",
      color: "indigo",
    },
    {
      question: "7. E se eu não gostar ou achar que não funciona com o meu filho/aluno?",
      answer:
        "Não há risco! Tens 7 dias de garantia: se não estiveres satisfeito, basta enviar um e-mail para contato@escolinha.shop e devolvemos o valor.",
      color: "red",
    },
  ]

  return (
    <>
      {shouldLoadVideo && <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />}
      {/* </CHANGE> */}

      <div className="min-h-screen bg-white font-sans">
        <section className="bg-teal-500 px-4 py-6">
          <div className="max-w-4xl mx-auto">
            {/* Headline Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 mb-6 text-center">
              <h1 className="text-white text-lg md:text-xl font-bold leading-tight">
                O Método que já ajudou mais de <span className="underline">10.000 crianças</span> com DIFICULDADE e
                ATRASO a desenvolver a linguagem e a escrita em{" "}
                <span className="underline text-cyan-300 font-extrabold">menos de um MÊS</span> com diversão e
                resultados!
              </h1>
            </div>

            <div ref={videoContainerRef} className="relative w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="wistia_responsive_padding" style={{ padding: "177.78% 0 0 0", position: "relative" }}>
                <div
                  className="wistia_responsive_wrapper"
                  style={{ height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}
                >
                  {shouldLoadVideo ? (
                    <iframe
                      src="https://fast.wistia.net/embed/iframe/wz47cojpk6?seo=false&videoFoam=true"
                      title="Video do Método"
                      allow="autoplay; fullscreen"
                      allowTransparency={true}
                      frameBorder="0"
                      scrolling="no"
                      className="wistia_embed"
                      name="wistia_embed"
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4">▶️</div>
                        <p className="text-xl font-bold">Carregando vídeo...</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* </CHANGE> */}

            <div className="mt-8 text-center">
              <a
                href="https://go.centerpag.com/PPU38CQ2EPJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-md mx-auto"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-8 rounded-2xl shadow-[0_10px_40px_rgba(34,197,94,0.5)] hover:shadow-[0_15px_50px_rgba(34,197,94,0.7)] border-4 border-green-300 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center gap-3 animate-pulse-scale">
                  <span className="text-3xl animate-bounce">🛒</span>
                  <span className="text-xl text-center leading-tight">Sim, quero garantir já o MÉTODO por 19,90€!</span>
                </div>
              </a>
            </div>
            {/* </CHANGE> */}
          </div>
        </section>

        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 px-4 text-center">
          <div className="max-w-sm mx-auto">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 mb-4 shadow-2xl border-4 border-white">
              <h1 className="text-2xl font-extrabold mb-3 leading-tight text-white text-center drop-shadow-lg">
                ACELERE 5 VEZES MAIS
                <br />
                <span className="text-3xl text-yellow-200">A APRENDIZAGEM</span>
                <br />
                DO SEU FILHO!
              </h1>
            </div>
            <p className="text-lg font-bold text-white text-center leading-relaxed">
              ESTIMULE O DESENVOLVIMENTO
              <br />
              INFANTIL COM
              <br />
              ATIVIDADES LÚDICAS E EDUCATIVAS
            </p>
          </div>
        </header>

        <section className="px-4 py-6 text-center bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="max-w-sm mx-auto">
            <a
              href="#purchase-button"
              onClick={scrollToCTA}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-lg inline-block animate-pulse"
            >
              🌟 Quero Ajudar Meu Filho!
            </a>
          </div>
        </section>

        {/* Hero Section */}
        <section className="px-4 py-4 text-center">
          <div className="max-w-sm mx-auto">
            <div className="bg-gradient-to-r from-yellow-200 to-orange-200 rounded-2xl p-4 mb-4 shadow-lg">
              <Image
                src="https://i.ibb.co/KjvWvhG6/1-1.jpg"
                alt="Criança aprendendo com alegria"
                width={400}
                height={300}
                priority
                className="w-full h-auto object-contain rounded-xl mb-4"
              />
              {/* </CHANGE> */}
              <p className="text-gray-700 font-semibold text-center text-lg">Criança aprendendo com alegria</p>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              <strong>Especialista em desenvolvimento infantil</strong> desde 2010
            </p>
            <div className="bg-green-100 rounded-2xl p-4 mb-4">
              <p className="text-xl font-bold text-green-800 mb-2">✨ Mais de 10.000 crianças</p>
              <p className="text-base text-green-700">já desenvolveram suas competências de leitura e escrita!</p>
            </div>
          </div>
        </section>

        {/* What is the Kit */}
        <section className="px-4 py-4 bg-white">
          <div className="max-w-sm mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4 text-center">
              ✅ O que é o Kit Atividades Grafismo Fonético Infantil?
            </h3>
            <div className="bg-blue-50 rounded-2xl p-4 mb-4">
              <p className="text-lg font-semibold text-blue-900 mb-3">
                Material completo para crianças dos 2 aos 10 anos
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-xl mr-2">✋</span>
                  <span className="text-base font-medium">Coordenação motora fina</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-2">🔊</span>
                  <span className="text-base font-medium">Reconhecimento fonético</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-2">✍️</span>
                  <span className="text-base font-medium">Escrita inicial</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-2">🧠</span>
                  <span className="text-base font-medium">Consciência fonológica</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-2">🎯</span>
                  <span className="text-base font-medium">Concentração e autonomia</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Difficulties Section */}
        <section className="px-4 py-4 bg-gradient-to-r from-red-50 to-pink-50">
          <div className="max-w-sm mx-auto">
            <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">⚠️ Intervenção Precoce é Fundamental</h3>
            <div className="bg-white rounded-2xl p-4 mb-4 shadow-lg">
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">🧠</div>
                <h4 className="text-lg font-bold text-gray-800">Crianças com Dificuldades de Aprendizagem</h4>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="text-base leading-relaxed">
                  <strong>Estudos científicos comprovam:</strong> crianças que recebem estímulos adequados nos primeiros
                  anos de vida têm <span className="text-red-600 font-bold">85% mais probabilidade</span> de superar
                  dificuldades de aprendizagem.
                </p>
                <div className="bg-red-100 rounded-xl p-3">
                  <h5 className="font-bold text-red-800 mb-1">⏰ O Tempo é Crucial</h5>
                  <p className="text-red-700 text-sm">
                    Cada mês de atraso na intervenção pode representar meses adicionais de recuperação. A
                    neuroplasticidade infantil é máxima até aos 8 anos.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-red-500 text-lg mr-2 mt-1">📊</span>
                    <p className="text-sm">
                      <strong>Dislexia:</strong> Identificação precoce reduz impacto em 70%
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 text-lg mr-2 mt-1">🎯</span>
                    <p className="text-sm">
                      <strong>Disgrafia:</strong> Exercícios motores previnem dificuldades futuras
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 text-lg mr-2 mt-1">🔤</span>
                    <p className="text-sm">
                      <strong>Consciência Fonológica:</strong> Base para leitura fluente
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-yellow-100 rounded-2xl p-4 border-l-4 border-yellow-500">
              <div className="flex items-start">
                <span className="text-2xl mr-3">💡</span>
                <div>
                  <h4 className="text-base font-bold text-yellow-800 mb-2">
                    O Kit Grafismo Fonético foi desenvolvido especificamente para:
                  </h4>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• Estimular áreas cerebrais responsáveis pela linguagem</li>
                    <li>• Fortalecer conexões neurais através da repetição estruturada</li>
                    <li>• Proporcionar experiências de sucesso que aumentam a autoestima</li>
                    <li>• Prevenir o desenvolvimento de bloqueios emocionais</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Receive */}
        <section className="px-4 py-4">
          <div className="max-w-sm mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4 text-center">
              📚 O que vais receber?
            </h3>

            {/* 3 Levels */}
            <div className="bg-purple-50 rounded-2xl p-4 mb-4">
              <h4 className="text-xl font-bold text-purple-900 mb-3">👉 3 Níveis de Aprendizagem</h4>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-3">
                  <h5 className="text-base font-bold text-purple-800">Nível 1</h5>
                  <p className="text-purple-700 text-sm">Primeiros traços e sons</p>
                </div>
                <div className="bg-white rounded-xl p-3">
                  <h5 className="text-base font-bold text-purple-800">Nível 2</h5>
                  <p className="text-purple-700 text-sm">Construção de palavras simples</p>
                </div>
                <div className="bg-white rounded-xl p-3">
                  <h5 className="text-base font-bold text-purple-800">Nível 3</h5>
                  <p className="text-purple-700 text-sm">Escrita estruturada e leitura fluida</p>
                </div>
              </div>
            </div>

            {/* Kit Image */}
            <div className="mb-4 text-center">
              <Image
                src="https://i.ibb.co/Z16FjnNB/Kits-pedag-gicos-para-acelerar-a-aprendizagem-fortalecer-a-coordena-o-motora-e-desenvolver-a-consci.jpg"
                alt="Kits pedagógicos"
                width={600}
                height={400}
                loading="lazy"
                className="w-full rounded-2xl shadow-lg"
              />
              {/* </CHANGE> */}
            </div>

            {/* Bonuses */}
            <div className="bg-yellow-50 rounded-2xl p-4 mb-4">
              <h4 className="text-xl font-bold text-yellow-900 mb-2">👉 + 8 Bónus Exclusivos</h4>
              <p className="text-base text-yellow-800">Para enriquecer a experiência de aprendizagem</p>
            </div>

            {/* Bonus Image */}
            <div className="mb-4 text-center">
              <Image
                src="https://i.ibb.co/F4rSL8s9/Seus-filhos-acham-a-B-blia-chata-Transforme-o-aprendizado-em-divers-o-com-o-Kit-de-Jogos-B-blicos-14.jpg"
                alt="Bónus exclusivos"
                width={600}
                height={400}
                loading="lazy"
                className="w-full rounded-2xl shadow-lg"
              />
              {/* </CHANGE> */}
            </div>

            {/* Video Class */}
            <div className="bg-red-50 rounded-2xl p-4 mb-4">
              <h4 className="text-xl font-bold text-red-900 mb-2">👉 Vídeo Aula Passo a Passo</h4>
              <p className="text-base text-red-800">
                Com a própria Professora Sandra explicando como aplicar o Kit corretamente
              </p>
              <div className="text-5xl text-center mt-3">🎥</div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="https://go.centerpag.com/PPU38CQ2EPJ"
                target="_blank"
                rel="noopener noreferrer"
                id="purchase-button"
                className="inline-block w-full max-w-md mx-auto mb-4"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-8 rounded-2xl shadow-[0_10px_40px_rgba(34,197,94,0.5)] hover:shadow-[0_15px_50px_rgba(34,197,94,0.7)] border-4 border-green-300 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center gap-3 animate-pulse-scale">
                  <span className="text-3xl animate-bounce">🛒</span>
                  <span className="text-xl text-center leading-tight">Sim, quero garantir já o MÉTODO por 19,90€!</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="px-4 py-4 bg-white">
          <div className="max-w-sm mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4 text-center">
              🎯 Para quem é indicado?
            </h3>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-xl p-3 flex items-start">
                <span className="text-xl mr-2">✔</span>
                <p className="text-base font-medium text-green-800">
                  Pais que querem apoiar os filhos no processo de alfabetização
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-3 flex items-start">
                <span className="text-xl mr-2">✔</span>
                <p className="text-base font-medium text-green-800">
                  Educadores e terapeutas que procuram um recurso eficaz
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-3 flex items-start">
                <span className="text-xl mr-2">✔</span>
                <p className="text-base font-medium text-green-800">
                  Crianças de 2 a 10 anos em processo de leitura e escrita
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-3 flex items-start border-2 border-red-200">
                <span className="text-xl mr-2">⚡</span>
                <p className="text-base font-medium text-red-800">
                  <strong>Especialmente indicado</strong> para crianças com sinais de dificuldades de aprendizagem
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-4">
          <div className="max-w-sm mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4 text-center">
              💬 Depoimentos
            </h3>

            {/* Image Carousel */}
            <div className="relative mb-6">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonialImages.map((img, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`Depoimento ${index + 1}`}
                        width={400}
                        height={300}
                        loading="lazy"
                        className="w-full rounded-2xl"
                      />
                      {/* </CHANGE> */}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {[...Array(totalSlides)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentSlide === index ? "bg-purple-500" : "bg-purple-300 hover:bg-purple-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-2xl p-4">
                <div className="text-3xl mb-2">👩</div>
                <p className="text-base text-blue-900 mb-2 italic">
                  "O meu filho ganhou gosto pela escrita! Com o Kit, em poucas semanas já fazia os primeiros traços com
                  segurança."
                </p>
                <p className="text-blue-700 font-semibold text-sm">– Ana, mãe do Tomás (4 anos)</p>
              </div>
              <div className="bg-pink-50 rounded-2xl p-4">
                <div className="text-3xl mb-2">👩</div>
                <p className="text-base text-pink-900 mb-2 italic">
                  "O João estava com receio de começar a escrever. Com as atividades lúdicas do Kit, agora pede para
                  fazer mais exercícios!"
                </p>
                <p className="text-pink-700 font-semibold text-sm">– Rita, mãe do João (6 anos)</p>
              </div>
              <div className="bg-indigo-50 rounded-2xl p-4">
                <div className="text-3xl mb-2">👩‍🏫</div>
                <p className="text-base text-indigo-900 mb-2 italic">
                  "Trabalho com crianças com necessidades especiais. Este Kit adapta-se perfeitamente a diferentes
                  ritmos de aprendizagem."
                </p>
                <p className="text-indigo-700 font-semibold text-sm">– Professora Carla, Educação Especial</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kit Preview Section */}
        <section className="px-4 py-4 bg-gradient-to-r from-yellow-50 to-orange-50">
          <div className="max-w-sm mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4 text-center">
              👀 Veja uma antevisão do Kit Atividades:
            </h3>

            {/* Kit Preview Carousel */}
            <div className="relative mb-6">
              <div className="overflow-hidden rounded-2xl bg-gray-100 min-h-[400px] flex items-center">
                <div
                  className="flex transition-transform duration-500 ease-in-out w-full"
                  style={{ transform: `translateX(-${currentKitSlide * 100}%)` }}
                >
                  {kitImages.map((img, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex items-center justify-center p-4">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`Atividade do Kit ${index + 1}`}
                        width={400}
                        height={400}
                        loading="lazy"
                        className="max-w-full max-h-[400px] object-contain rounded-2xl"
                      />
                      {/* </CHANGE> */}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => setCurrentKitSlide((prev) => (prev - 1 + totalKitSlides) % totalKitSlides)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentKitSlide((prev) => (prev + 1) % totalKitSlides)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {[...Array(totalKitSlides)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentKitSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentKitSlide === index ? "bg-orange-500" : "bg-orange-300 hover:bg-orange-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center">
              <p className="text-lg font-semibold text-gray-800 mb-2">📖 Exemplos das atividades incluídas no Kit</p>
              <p className="text-gray-600">
                Atividades estruturadas por níveis de dificuldade para um desenvolvimento progressivo
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="px-4 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white">
          <div className="max-w-sm mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">💸 Quanto custa?</h3>
            <div className="bg-white/20 rounded-2xl p-6 mb-4 border-2 border-white/30">
              <p className="text-lg mb-3">Kit Atividades Grafismo Fonético completo</p>
              <div className="mb-2">
                <span className="text-2xl text-red-200 line-through">De 35,90€</span>
              </div>
              <div className="text-6xl font-extrabold mb-3 text-yellow-300 animate-bounce">Por 19,90€</div>
              <div className="bg-yellow-400 text-red-800 font-bold py-2 px-4 rounded-full mb-3 text-sm animate-pulse">
                ⚡ Valor Promocional Somente Hoje ⚡
              </div>
              <p className="text-base">🎁 Um investimento acessível para transformar a aprendizagem!</p>
            </div>
          </div>
        </section>

        {/* CTA Button */}
        <section className="px-6 py-6 text-center">
          <div className="max-w-md mx-auto">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-8">
              🚀 Como comprar?
            </h3>
            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold text-lg flex-shrink-0 mt-1">
                  1
                </span>
                <span className="text-lg">Clica no botão abaixo</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold text-lg flex-shrink-0 mt-1">
                  2
                </span>
                <span className="text-lg">Faz o pagamento seguro</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold text-lg flex-shrink-0 mt-1">
                  3
                </span>
                <span className="text-lg">Recebe o Kit no teu e-mail</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold text-lg flex-shrink-0 mt-1">
                  4
                </span>
                <span className="text-lg">Assiste à explicação da vídeo aula de como aplicar as atividades</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold text-lg flex-shrink-0 mt-1">
                  5
                </span>
                <span className="text-lg">
                  Aplica as atividades do básico para o mais avançado. É muito simples, não precisa de ter conhecimento
                  nenhum.
                </span>
              </div>
            </div>
            <a
              href="https://go.centerpag.com/PPU38CQ2EPJ"
              target="_blank"
              rel="noopener noreferrer"
              id="purchase-button"
              className="inline-block w-full max-w-md mx-auto mb-4"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-8 rounded-2xl shadow-[0_10px_40px_rgba(34,197,94,0.5)] hover:shadow-[0_15px_50px_rgba(34,197,94,0.7)] border-4 border-green-300 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center gap-3 animate-pulse-scale">
                <span className="text-3xl animate-bounce">🛒</span>
                <span className="text-xl text-center leading-tight">Sim, quero garantir já o MÉTODO por 19,90€!</span>
              </div>
            </a>
          </div>
        </section>

        {/* About Professor Sandra */}
        <section className="px-6 py-6 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="max-w-md mx-auto">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-8 text-center">
              👩‍🏫 Quem é a Professora Sandra Oliveira?
            </h3>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <Image
                  src="https://i.ibb.co/S44mJhhQ/Chat-GPT-Image-29-de-jul-de-2025-14-59-16.png"
                  alt="Professora Sandra Oliveira"
                  width={256}
                  height={256}
                  loading="lazy"
                  className="w-64 h-64 object-cover rounded-2xl mx-auto mb-6 shadow-lg border-4 border-purple-200"
                />
                {/* </CHANGE> */}
                <h4 className="text-2xl font-bold text-purple-900 mb-2">Professora Sandra Oliveira</h4>
                <p className="text-lg text-purple-700 font-semibold">Especialista em Desenvolvimento Infantil</p>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 mt-1">🎓</span>
                    <div>
                      <h5 className="font-bold text-purple-800 mb-1">Formação Académica</h5>
                      <p className="text-purple-700">
                        Licenciada em Educação de Infância com especialização em Dificuldades de Aprendizagem
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 mt-1">⏰</span>
                    <div>
                      <h5 className="font-bold text-blue-800 mb-1">Experiência</h5>
                      <p className="text-blue-700">
                        Mais de 14 anos dedicados ao ensino e desenvolvimento de métodos inovadores de aprendizagem
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 mt-1">👶</span>
                    <div>
                      <h5 className="font-bold text-green-800 mb-1">Impacto</h5>
                      <p className="text-green-700">
                        Já ajudou mais de 10.000 crianças a superarem dificuldades de leitura e escrita
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 mt-1">🏆</span>
                    <div>
                      <h5 className="font-bold text-orange-800 mb-1">Reconhecimento</h5>
                      <p className="text-orange-700">
                        Criadora do método Grafismo Fonético, reconhecido por educadores e terapeutas
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-pink-50 rounded-xl p-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 mt-1">💝</span>
                    <div>
                      <h5 className="font-bold text-pink-800 mb-1">Missão</h5>
                      <p className="text-pink-700">
                        Tornar a aprendizagem acessível e divertida para todas as crianças, especialmente aquelas com
                        dificuldades
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-lg text-gray-600 italic">
                  "Acredito que cada criança tem o seu próprio ritmo e potencial único. O meu objetivo é criar
                  ferramentas que respeitem essa individualidade e promovam o sucesso de todos."
                </p>
                <p className="text-purple-700 font-semibold mt-2">- Professora Sandra Oliveira</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="px-4 py-4 bg-gray-50">
          <div className="max-w-sm mx-auto text-center">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3">
              📩 Apoio ao Cliente
            </h3>
            <p className="text-base text-gray-700 mb-3">Se tiveres dúvidas, envia um e-mail para:</p>
            <a href="mailto:contato@escolinha.shop" className="text-sm font-semibold text-blue-600 underline break-all">
              contato@escolinha.shop
            </a>
          </div>
        </section>

        {/* Guarantee */}
        <section className="px-6 py-6 bg-green-50">
          <div className="max-w-md mx-auto text-center">
            <div className="text-6xl mb-4 animate-bounce">🔒</div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Garantia de Confiança</h3>
            <p className="text-lg text-green-700 leading-relaxed">
              Acreditamos tanto no poder do Método Grafismo Fonético que oferecemos <strong>7 dias de garantia</strong>:
              se não estiveres satisfeito, devolvemos o teu investimento.
            </p>
          </div>
        </section>

        {/* Additional CTA Button */}
        <section className="px-6 py-6 text-center">
          <div className="max-w-md mx-auto">
            <a
              href="#purchase-button"
              onClick={scrollToCTA}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-2xl font-bold py-6 px-8 rounded-2xl shadow-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 inline-block text-center animate-pulse"
            >
              ✅ Quero transformar o futuro do meu filho agora!
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-6 bg-white">
          <div className="max-w-md mx-auto">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-8 text-center">
              ❓ Perguntas Frequentes
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-${faq.color}-50 rounded-2xl overflow-hidden ${faq.color === "red" ? "border-2 border-red-200" : ""}`}
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className={`w-full text-left p-6 focus:outline-none hover:bg-${faq.color}-100 transition-colors duration-200 flex justify-between items-center`}
                  >
                    <h4 className={`text-lg font-bold text-${faq.color}-900 pr-4`}>{faq.question}</h4>
                    <span
                      className={`text-${faq.color}-900 text-2xl font-bold transform transition-transform duration-300 ${openFAQ === index ? "rotate-180" : ""}`}
                    >
                      {openFAQ === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className={`text-${faq.color}-800 leading-relaxed`}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-6 px-6 text-center">
          <div className="max-w-md mx-auto">
            <p className="text-lg font-semibold">Método Grafismo Fonético Infantil</p>
            <p className="text-sm opacity-80 mt-2">Prof. Sandra Oliveira © Site Oficial - 2025</p>
          </div>
        </footer>
      </div>
    </>
  )
}
