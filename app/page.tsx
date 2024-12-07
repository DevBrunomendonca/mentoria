import Image from "next/image";
import { Button } from "./_components/ui/button";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import IconProfile from "./_components/icon-profile";
import TagAdvantages from "./_components/tag-advantages";
import CardAbout from "./_components/card-about";
import CardSale from "./_components/card-sale";
import CardTestimonials from "./_components/card-testimonials";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./_components/ui/accordion";

const Home = () => {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <VideoSection />
      <SaleSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
};

const BannerSection = () => {
  return (
    <section className="px-4 py-8 bg-[url(/banner-home-m.webp)] h-[620px] bg-right-top  bg-cover bg-no-repeat md:h-[680px] md:bg-[url(/banner-home-d.webp)] md:bg-center ">
      <div className="max-w-6xl mx-auto flex flex-col gap-3 items-start  justify-end h-full  md:justify-center ">
        <div className="flex gap-1">
          <Image
            src="/icons/icone-toggle.svg"
            alt="Icone toggle"
            width={30}
            height={20}
          />
          <p className="text-white text-sm font-light">CEO Adriano Camargo</p>
        </div>
        <h1 className="text-white font-semibold text-3xl max-w-[440px] md:text-5xl">
          Fature 100k mensal no digital
        </h1>
        <p className="text-white max-w-[480px] text-sm font-light">
          Se você ainda não tem um produto digital que vende 24 horas por dia,
          está deixando dinheiro na mesa! Você não precisa de mais um curso, mas
          de orientação prática. A mentoria oferece implementação prática,
          gestão de tráfego e acompanhamento individual.
        </p>
        <a className="w-full max-w-[312px]" href="#sale-section">
          <Button className="text-white rounded-none w-full bg-blue-800 hover:bg-blue-700">
            Garantir proposta
            <ArrowUpRight />
          </Button>
        </a>
        <div className="flex w-full justify-center md:justify-start max-w-[300px] items-center">
          <div className="flex">
            <IconProfile src="/icons/icone-perfil-1.png" />
            <IconProfile
              src="/icons/icone-perfil-2.png"
              className="-translate-x-4"
            />
            <IconProfile
              src="/icons/icone-perfil-3.png"
              className="-translate-x-8"
            />
          </div>
          <div className="flex -ml-4 flex-col items-start">
            <span className="text-white text-xs">Faça parte</span>
            <span className="text-white opacity-75 text-light text-xs">
              Agora Mesmo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-black text-start text-2xl md:text-3xl font-semibold">
            Vantagens da mentoria
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <TagAdvantages paragraph="Ao vivo" src="/icons/icone-clock.svg" />
            <TagAdvantages
              paragraph="Premiações de 10k e 1M de faturamento"
              src="/icons/icone-trofel.svg"
            />
            <TagAdvantages
              paragraph="Resultado garantido"
              src="/icons/icone-estrela.svg"
            />
            <TagAdvantages
              paragraph="Planejamento estratégico "
              src="/icons/icone-peca.svg"
            />
          </div>
        </div>
        <div className="max-w-[400px] mx-auto flex pt-8 flex-col items-start gap-6 md:flex-row md:max-w-6xl">
          <Image
            src="/banner-about.webp"
            alt="Imagem do CEO Adrianio Camargo na frente do helicóptero"
            width={0}
            height={0}
            sizes="100vh"
            className="max-w-[400px] w-full"
          />
          <div className="space-y-8 w-full">
            <h2 className="text-black text-2xl md:text-3xl font-semibold">
              Mentoria + Implantação de funil + Gestão de Tráfego por minha
              conta!
            </h2>
            <div className="space-y-6">
              <CardAbout src="/icons/icone-chat.svg" title="Mentoria">
                <li className="list-disc text-xs text-gray-500">
                  Acompanhamento individual
                </li>
                <li className="list-disc text-xs text-gray-500">
                  3 meses de projeto
                </li>
                <li className="list-disc text-xs text-gray-500">
                  2 encontros semanais via meet (ao vivo)
                </li>
                <li className="list-disc text-xs text-gray-500">Plano 100k</li>
                <li className="list-disc text-xs text-gray-500">
                  Trilha de implantação e criação de produtos
                </li>
                <li className="list-disc text-xs text-gray-500">
                  Acesso as minhas taxas nas plataformas de distribuição de
                  produtos digitais (kiwify, braip e doppus).
                </li>
              </CardAbout>
              <div className="h-[1px] w-full bg-gray-400 opacity-10"></div>
              <CardAbout src="/icons/icone-usage.svg" title="Tráfego Pago">
                <li className="list-disc text-xs text-gray-500">
                  2 meses de gestão de tráfego grátis
                </li>
                <li className="list-disc text-xs text-gray-500">
                  Planejamento de campanha e gestão operacional total pelo meu
                  time estratégico.
                </li>
              </CardAbout>
              <div className="h-[1px] w-full bg-gray-400 opacity-10"></div>
              <CardAbout
                src="/icons/icone-filter.svg"
                title="Implantação de Funil"
              >
                <li className="list-disc text-xs text-gray-500">
                  Estruturação completa de funil de aplicação direta
                </li>
                <li className="list-disc text-xs text-gray-500">
                  Design de Página.
                </li>
                <li className="list-disc text-xs text-gray-500">
                  Design de anuncio.
                </li>
                <li className="list-disc text-xs text-gray-500">
                  Indicação das melhores ferramentas.
                </li>
                <li className="list-disc text-xs text-gray-500">
                  Recuperação de Vendas e automações.
                </li>
                <li className="list-disc text-xs text-gray-500">
                  Boas Vindas.
                </li>
                <li className="list-disc text-xs text-gray-500">
                  Criação de produto.
                </li>
              </CardAbout>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section className="px-4 py-8">
      <iframe
        src="https://www.youtube.com/embed/-OnQL5hvRGc?si=Cjizv0UbMqUWcRi0"
        className="w-full min-h-[650px] max-w-6xl mx-auto"
        allowFullScreen
      />
    </section>
  );
};

const SaleSection = () => {
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
              title="Suporte por 6 meses"
              description="6 meses de orientação personalizada para garantir o sucesso do seu projeto!"
            />
            <CardSale
              src="icons/icone-access.svg"
              title="Acesso Imediato"
              description="Garanta agora a sua vaga e tenha acesso imediato a mentoria NEXT LEVEL"
            />
            <CardSale
              src="icons/icone-book.svg"
              title="Ebook do 0 aos 30k"
              description="Passo a passo para poder criar o seu produto digital ou mentoria."
            />
          </div>
        </div>
        <div className="w-full bg-white space-y-5 p-10 md:w-2/5">
          <span className="text-blue-700 border-[1px] border-blue-700 rounded-3xl px-2 py-1 ">
            50% OFF
          </span>
          <h3 className="text-black text-2xl font-medium md:text-3xl">
            Oferta de Natal
          </h3>
          <ul className="space-y-3">
            <li className="flex text-gray-500 gap-1 items-center">
              <CheckCircle color="#003DA6" /> Mentoria NEXT LEVEL
            </li>
            <li className="flex text-gray-500 gap-1 items-center">
              <CheckCircle color="#003DA6" /> Acompanhamento Individual
            </li>
            <li className="flex text-gray-500 gap-1 items-center">
              <CheckCircle color="#003DA6" /> Tráfego Pago
            </li>
            <li className="flex text-gray-500 gap-1 items-center">
              <CheckCircle color="#003DA6" /> Implantação de Funil
            </li>
          </ul>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">
              De R$: <s>19.997,00</s> por
            </span>
            <span className="text-black text-4xl font-semibold">
              R$ 9.997,90
            </span>
            <a href="https://pay.cakto.com.br/AsDRWCF" target="_blank">
              <Button className="text-white mt-4 mb-2 p-6 rounded-none w-full bg-blue-800 hover:bg-blue-700">
                Adquira agora
                <ArrowUpRight />
              </Button>
            </a>
            <span className="text-gray-500 text-sm">
              Cartão de crédito, Boleto á vista ou Pix
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-black max-w-6xl mx-auto text-2xl md:text-3xl font-semibold">
          O que estão falando?
        </h2>
        <div className="flex gap-4 items-start overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <CardTestimonials
            src="/icons/icone-perfil-1.png"
            name="@imperiodaspickups"
            description="O cara é brabo, me ajudou a criar um produto com recorrência e fizemos 331 vendas em 30 dias ."
          />
          <CardTestimonials
            src="/icons/icone-perfil-2.png"
            name="@wesleygonncalves"
            description="Comecei como gestor de trafego, depois que fiz a mentoria com o Adriano a minha cabeça explodiu  para o universo da recorrência, como ele gosta de dizer: SaaS. Agora tenho vários produtos com recorrência e faço mais de 1000 vendas por mês."
          />
          <CardTestimonials
            src="/icons/icone-perfil-3.png"
            name="@oxetourr"
            description="Esse cara é monstro , salvou a minha empresa , criou  um produto recorrente que hoje representa 70% da minha renda."
          />
          <CardTestimonials
            src="/icons/icone-perfil-4.png"
            name="@lucasvittorino_"
            description="O primeiro capitulo do ebook explodiu a minha cabeça, Abriu a minha mente em como deve ser o meu posicionamento no digital e agora estamos criando o meu primeiro produto e estou muito satisfeito"
          />
        </div>
      </div>
    </section>
  );
};

const FaqSection = () => {
  return (
    <section className="px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-6 md:flex-row ">
        <div className="w-full">
          <h2 className="text-black max-w-6xl mx-auto text-2xl md:text-3xl font-semibold">
            Dúvidas frequentes
          </h2>
          <p className="text-gray-500 text-sm">
            Você ainda tem alguma dúvida?
            <a
              className="border-b-[1px] border-gray-500"
              href="https://wa.link/wg1gkq"
              target="_blank"
            >
              {" "}
              chama no Whatsapp
            </a>
          </p>
          <a href="#sale-section">
            <Button className="text-white max-w-[320px] mt-4 mb-2 p-6 rounded-none w-full bg-blue-800 hover:bg-blue-700">
              Adquira agora
              <ArrowUpRight />
            </Button>
          </a>
        </div>
        <Accordion className="w-full" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Sou iniciante no digital, a mentoria next level serve pra mim?
            </AccordionTrigger>
            <AccordionContent>
              Sim! A mentoria NEXT LEVEL é perfeita para você que está começando
              no digital. <br /> <br /> Nela, você aprenderá: <br />- O modo
              certo de fazer dinheiro no digital <br />- Estratégias comprovadas
              para sucesso <br />- Passo a passo para criar um produto vendável{" "}
              <br />- Como evitar erros comuns de iniciantes Com a mentoria NEXT
              LEVEL <br /> <br />
              Você: <br />- Ganhará confiança e conhecimento <br />- Economizará
              tempo e recursos <br />- Acelerará seu crescimento no digital Não
              perca a chance de começar com o pé direito. Inscreva-se agora e
              alcance o sucesso no digital!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Quando terei acesso a mentoria?</AccordionTrigger>
            <AccordionContent>
              Assim que você fizer a inscrição, terá acesso imediato a o meu
              whatsapp pessoal para que juntos possamos começar a mentoria NEXT
              LEVEL o mais rápido possível e acelerar o seu crescimento no
              digital. <br />
              Não estamos falando de teoria sem resultado, mas de um método
              testado e validado por quem já atingiu grandes números. Essa
              mentoria é a base que vai te dar o controle sobre o seu
              crescimento, fazendo você ter um produto que venda 24 horas por
              dia na internet. <br />
              Além disso, você ainda vai ganhar o meu ebook do 0 aos 30k, com
              Práticas a cada capítulo, que te conduz passo a passo até o seu
              produto no digital. Esse bônus é apenas para o novembro black,
              dando uma oportunidade real para aquele que deseja ter resultados
              com a internet e se sente perdido. <br />
              Essa Mentoria te dá a vantagem de ter um produto no digital de
              forma estratégica e deixa você pronto para potencializar seus
              resultados.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Esse produto serve pra quem está fora do Brasil?
            </AccordionTrigger>
            <AccordionContent>
              Sim. Serve para quem está em qualquer lugar do mundo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Por quanto tempo terei acesso?</AccordionTrigger>
            <AccordionContent>
              Você terá acesso de 1 ano para assistir todo o conteúdo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              É seguro realizar a compra da Mentoria Next Level?
            </AccordionTrigger>
            <AccordionContent>
              Sim. A plataforma de pagamento escolhida é eficaz, reconhecida e
              totalmente segura, onde você poderá fazer tranquilamente a sua
              compra. Além do mais, o curso possui uma garantia total de 7 dias.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Não encontrou resposta para a sua dúvida?
            </AccordionTrigger>
            <AccordionContent>
              Se não encontrou resposta para a sua dúvida, escreva para: <br />
              dlack@dlack.com.br
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Home;
