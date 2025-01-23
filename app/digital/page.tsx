import { ArrowUpRight, CheckCircle } from "lucide-react";
import { Button } from "../_components/ui/button";
import Image from "next/image";
import CardSale from "../_components/card-sale";

const DigitalPage = () => {
  return (
    <>
      <SectionBannerDigital />
      <SectionAboutDigital />
      <SectionAboutPersonDigital />
      <VideoSectionDigital />
      <SaleSectionDigital />
    </>
  );
};

const SectionBannerDigital = () => {
  return (
    <section className="px-2 py-8 bg-[url('/banner-ebook-m.webp')] bg-cover bg-no-repeat bg-center md:bg-[url('/banner-ebook-d.webp')] min-h-[900px] md:min-h-[600px]">
      <div className="flex flex-col items-center gap-8 justify-center h-full max-w-6xl mx-auto lg:flex-row">
        <div className="order-1 lg:order-2">
          <Image
            src="/benner-home-ebook.webp"
            alt=""
            width={651}
            height={612}
          />
        </div>
        <div className="max-w-xl flex flex-col justify-center h-full gap-2 md:gap-4 order-2 lg:order-1">
          <h1 className="text-black font-bold text-3xl md:text-5xl">
            Fature 30k no digital com produto ou{" "}
            <span className="text-blue-700">mentoria no digital.</span>
          </h1>
          <p className="text-black">
            Você vai continuar chorando porque não tem um produto digital ou vai
            criar vergonha e comprar esse passo a passo para no mínimo criar o
            seu primeiro produto ou mentoria.
          </p>
          <a href="#sale-section">
            <Button className="text-white mt-4 max-w-96 mb-2 p-6 rounded-none w-full bg-blue-800 hover:bg-blue-700">
              Adquira agora
              <ArrowUpRight />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const SectionAboutDigital = () => {
  return (
    <section className="max-w-6xl mx-auto px-2 py-16">
      <div className="flex flex-col gap-6 items-center md:flex-row">
        <Image
          src="/banner-about-ebook.png"
          alt="Banner About"
          width={643}
          height={656}
          className="w-full md:w-2/4"
        />
        <div className="flex flex-col gap-2 items-start w-full md:w-2/4 max-w-[500px]">
          <h2 className="font-bold text-3xl text-black">
            Descubra os 6 Passos Essenciais para Criar Seu Produto Digital ou
            Mentoria
          </h2>
          <p className="text-black text-sm">
            Ao adquirir nosso guia exclusivo, você terá acesso a um método
            comprovado e detalhado que desenvolvi para ajudá-lo a criar seu
            próprio produto digital ou programa de mentoria. Este passo a passo
            foi cuidadosamente elaborado para garantir que você tenha todas as
            ferramentas e conhecimentos necessários para alcançar o sucesso.
          </p>
          <p className="text-black text-sm">
            Bônus Especial: Ao concluir o processo, você receberá meu número de
            WhatsApp. Com isso, poderá agenda uma sessão exclusiva de 40 minutos
            via Google Meet, onde estarei disponível para esclarecer todas as
            suas dúvidas e oferecer orientações personalizadas para o seu
            projeto.
          </p>
        </div>
      </div>
    </section>
  );
};

const SectionAboutPersonDigital = () => {
  return (
    <section className="bg-blue-700 px-2 py-16">
      <div className="flex flex-col gap-6 items-center max-w-6xl mx-auto lg:flex-row">
        <div className="max-w-[500px] space-y-2">
          <h2 className="text-white text-3xl font-bold">Adriano Camargo</h2>
          <p className="text-sm text-white">
            CEO do Grupo Dlack Tecnologia, que abrange sete empresas inovadoras
            no setor digital. Com mais de oito anos de experiência no mercado,
            tive a oportunidade de colaborar com grandes nomes como Engegraph,
            Alterdata e TOTVS, alcançando faturamentos expressivos na casa dos
            múltiplos oito dígitos ao longo da minha carreira.
          </p>
          <p className="text-white text-sm">
            Agora, estou aqui para ajudá-lo a escrever sua própria história de
            sucesso. Chegou o momento de deixar de apenas admirar as conquistas
            dos outros e começar a construir a sua trajetória vitoriosa.
          </p>
        </div>
        <Image
          src="/banner-about-ebook-2.png"
          alt="Banner section about person"
          width={610}
          height={432}
        />
      </div>
    </section>
  );
};

const VideoSectionDigital = () => {
  return (
    <section className="px-4 py-8">
      <iframe
        src="https://www.youtube.com/embed/q4hppPO7Vv8?si=NVJMeiFJWkYfvrKS"
        className="w-full min-h-[650px] max-w-6xl mx-auto"
        allowFullScreen
      />
    </section>
  );
};

const SaleSectionDigital = () => {
  return (
    <section id="sale-section" className="px-4 py-8 bg-blue-700">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 items-start md:flex-row">
        <div className="w-full space-y-6 md:w-3/5">
          <h2 className="text-white text-2xl md:text-3xl font-semibold">
            Seu projeto decolando em um clique
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <CardSale
              src="/icons/icone-check.svg"
              title="7 dias de garantia"
              description="Reembolso integral em até 7 dias após a compra"
            />
            <CardSale
              src="icons/icone-chat-2.svg"
              title="Suporte"
              description="Ao finalizar a leitura você terá acesso a uma reunião via Meet para tirar dúvidas."
            />
            <CardSale
              src="icons/icone-access.svg"
              title="Acesso Imediato"
              description="Ao finalizar a compra você recebera em seu e-mail o seu ebook com o passo-a-passo."
            />
            <CardSale
              src="icons/icone-book.svg"
              title="Metanoia"
              description="Chegou o momento da sua mudança de rota. "
            />
          </div>
        </div>
        <div className="w-full bg-white space-y-5 p-10 md:w-2/5">
          <span className="text-blue-700 border-[1px] border-blue-700 rounded-3xl px-2 py-1 ">
            50% OFF
          </span>
          <h3 className="text-black text-2xl font-medium md:text-3xl">
            Oferta Especial 2025
          </h3>
          <ul className="space-y-3">
            <li className="flex text-gray-500 gap-1 items-center">
              <CheckCircle color="#003DA6" /> Clareza
            </li>
            <li className="flex text-gray-500 gap-1 items-center">
              <CheckCircle color="#003DA6" /> Promessa
            </li>
            <li className="flex text-gray-500 gap-1 items-center">
              <CheckCircle color="#003DA6" /> Vendas
            </li>
            <li className="flex text-gray-500 gap-1 items-center">
              <CheckCircle color="#003DA6" /> Produtos
            </li>
          </ul>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">
              De R$ <s>599,90</s> por
            </span>
            <span className="text-black text-4xl font-semibold">
              R$ R$ 299,90
            </span>
            <a href="https://pay.cakto.com.br/AX5QSDf" target="_blank">
              <Button className="text-white mt-4 mb-2 p-6 rounded-none w-full bg-blue-800 hover:bg-blue-700">
                Adquira agora
                <ArrowUpRight />
              </Button>
            </a>
            <span className="text-gray-500 text-sm">
              Cartão de crédito ou Pix
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPage;
