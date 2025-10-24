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
    const ctaSection = document.getElementById("pricing-section")
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
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-6 px-8 rounded-2xl shadow-[0_10px_40px_rgba(251,146,60,0.5)] hover:shadow-[0_15px_50px_rgba(251,146,60,0.7)] border-4 border-yellow-300 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center gap-3 animate-pulse-scale">
                  <span className="text-3xl animate-bounce">🛒</span>
                  <span className="text-xl text-center leading-tight">Sim, quero garantir já o MÉTODO por 19,90€!</span>
                </div>
@@ -192,11 +192,11 @@
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 px-4 text-center">
          <div className="max-w-sm mx-auto">
            <div className="mb-4">
              <h1 className="text-3xl font-extrabold mb-3 leading-tight text-center drop-shadow-lg bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                ACELERE 5 VEZES MAIS
                <br />
                <span className="text-4xl">A APRENDIZAGEM</span>
                <br />
                DO SEU FILHO!
              </h1>
@@ -423,7 +423,7 @@
                id="purchase-button"
                className="inline-block w-full max-w-md mx-auto mb-4"
              >
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-6 px-8 rounded-2xl shadow-[0_10px_40px_rgba(251,146,60,0.5)] hover:shadow-[0_15px_50px_rgba(251,146,60,0.7)] border-4 border-yellow-300 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center gap-3 animate-pulse-scale">
                  <span className="text-3xl animate-bounce">🛒</span>
                  <span className="text-xl text-center leading-tight">Sim, quero garantir já o MÉTODO por 19,90€!</span>
                </div>
@@ -698,183 +698,183 @@
              id="purchase-button"
              className="inline-block w-full max-w-md mx-auto mb-4"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-6 px-8 rounded-2xl shadow-[0_10px_40px_rgba(251,146,60,0.5)] hover:shadow-[0_15px_50px_rgba(251,146,60,0.7)] border-4 border-yellow-300 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center gap-3 animate-pulse-scale">
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
