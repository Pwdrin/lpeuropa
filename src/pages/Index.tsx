import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import productMockup from "@/assets/product-mockup.png";
import { Check, Shield, Clock, Sparkles, ArrowDown, Heart, Leaf, Star } from "lucide-react";
import { Flower1, Flower2, Leaf1 } from "@/components/Flowers";

const Index = () => {
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/90 sm:bg-background/75 sm:bg-gradient-to-r sm:from-background/95 sm:via-background/80 sm:to-transparent" />
        
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center sm:text-left">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-sage-light text-sage-dark rounded-full text-sm font-medium mb-6 animate-fade-in">
              Método 100% Natural e Científico
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-snug mb-6 animate-slide-up">
              Livre-se da Candidíase
              <span className="block text-coral">de uma Vez por Todas</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up animation-delay-200">
              O guia completo que já ajudou milhares de mulheres a restaurar sua saúde íntima 
              naturalmente, sem medicamentos agressivos ou efeitos colaterais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center animate-slide-up animation-delay-400">
              <Button variant="hero" size="xl" onClick={scrollToPrice}>
                Quero Me Libertar Agora
              </Button>
              <Button variant="outline-coral" size="lg" onClick={scrollToPrice}>
                Ver Detalhes do Método
              </Button>
            </div>
          </div>
          
          <div className="mt-12 animate-fade-in animation-delay-600 sm:hidden">
            <ArrowDown className="w-8 h-8 text-coral mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Você Reconhece <span className="text-coral">Esses Sintomas?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A candidíase recorrente pode afetar muito mais do que sua saúde física
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Coceira intensa que não passa",
              "Corrimento branco e espesso",
              "Dor durante relações íntimas",
              "Vermelhidão e inchaço",
              "Sensação de ardência constante",
              "Tratamentos que não funcionam"
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 p-5 bg-background rounded-xl shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-coral shrink-0" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-12 text-lg text-muted-foreground italic max-w-2xl mx-auto">
            Se você se identificou com algum desses pontos, saiba que <span className="text-coral font-semibold">existe uma solução natural</span> que vai muito além dos remédios convencionais.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-coral font-semibold uppercase tracking-wider text-sm">A Solução</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
                Método Thrush-Free: O Caminho Natural para a Liberdade
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Um sistema completo baseado em ciência que trata a causa raiz da candidíase, 
                não apenas os sintomas. Desenvolvido para restaurar o equilíbrio da flora vaginal 
                de forma natural e duradoura.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "Baseado em evidências científicas" },
                  { icon: Leaf, text: "100% natural, sem efeitos colaterais" },
                  { icon: Clock, text: "Resultados visíveis em 7 dias" },
                  { icon: Heart, text: "Previne recaídas definitivamente" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-sage-dark" />
                    </div>
                    <p className="text-foreground font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-coral-light/20 to-sage-light/20 rounded-3xl blur-2xl" />
              <img 
                src={productMockup} 
                alt="Kit Completo Thrush-Free Method" 
                className="relative w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-sage-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              O Que Você Vai <span className="text-coral">Receber</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Um kit completo com tudo que você precisa para sua recuperação
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Guia Principal: Thrush-Free Method",
                description: "O método completo de 7 dias para restaurar sua saúde íntima. Inclui compreensão da flora vaginal, causas da candidíase e plano detalhado de tratamento.",
                value: "R$ 97",
                icon: Sparkles
              },
              {
                title: "Guia Rápido: Alívio em 24 Horas",
                description: "Passos imediatos para controlar os sintomas e começar sua recuperação desde o primeiro dia.",
                value: "R$ 47",
                icon: Clock
              },
              {
                title: "Plano Alimentar de 7 Dias",
                description: "Cardápio completo com receitas antifúngicas deliciosas. Café da manhã, almoço e jantar para cada dia.",
                value: "R$ 67",
                icon: Leaf
              },
              {
                title: "Mini Guia Anti-Recaída",
                description: "10 passos simples para nunca mais sofrer com candidíase recorrente. Hábitos diários e checklist semanal.",
                value: "R$ 37",
                icon: Shield
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-background p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center shrink-0 group-hover:bg-coral/20 transition-colors">
                    <item.icon className="w-7 h-7 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
                    <span className="text-sage font-semibold text-sm">Valor: {item.value}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Histórias de <span className="text-coral">Transformação</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Mulheres reais que recuperaram sua qualidade de vida
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Mariana S.",
                text: "Depois de anos sofrendo com candidíase recorrente, finalmente encontrei algo que funciona. Em menos de uma semana já senti diferença!",
                rating: 5
              },
              {
                name: "Carolina P.",
                text: "O plano alimentar fez toda a diferença. Não imaginava que a alimentação tinha tanta influência. Recomendo demais!",
                rating: 5
              },
              {
                name: "Juliana M.",
                text: "Já tinha tentado de tudo. Esse método foi o único que tratou a causa real do problema. Há 6 meses sem nenhuma recaída.",
                rating: 5
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-card p-8 rounded-2xl shadow-soft border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-coral text-coral" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{item.text}"</p>
                <p className="font-semibold text-coral">— {item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-semibold mb-6">
              Oferta Especial por Tempo Limitado
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Invista na Sua Saúde Hoje
            </h2>
            
            <div className="bg-background p-8 md:p-12 rounded-3xl shadow-medium border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-coral text-primary-foreground px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                Kit Completo
              </div>
              
              <div className="mb-8">
                <p className="text-muted-foreground line-through text-lg mb-2">De R$ 248,00</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl text-muted-foreground">R$</span>
                  <span className="font-serif text-6xl md:text-7xl font-bold text-coral">47</span>
                  <span className="text-muted-foreground">,00</span>
                </div>
                <p className="text-sage font-semibold mt-2">ou 4x de R$ 11,75 sem juros</p>
              </div>
              
              <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                {[
                  "Guia Principal Thrush-Free Method",
                  "Guia de Alívio em 24 Horas",
                  "Plano Alimentar de 7 Dias",
                  "Mini Guia Anti-Recaída",
                  "Acesso vitalício e atualizações",
                  "Garantia de 7 dias"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-sage shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" size="xl" className="w-full max-w-md mb-4">
                Quero Meu Acesso Agora
              </Button>
              
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Compra 100% segura. Pagamento via Pix, cartão ou boleto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-sage-light/50 p-8 md:p-12 rounded-3xl">
            <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-accent-foreground" />
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Garantia de 7 Dias
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Sua satisfação é nossa prioridade. Se por qualquer motivo você não ficar satisfeita 
              com o método nos primeiros 7 dias, devolvemos 100% do seu investimento. 
              Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Perguntas <span className="text-coral">Frequentes</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "O método funciona para candidíase recorrente?",
                a: "Sim! O método foi desenvolvido especialmente para tratar a causa raiz da candidíase, prevenindo recaídas de forma natural e duradoura."
              },
              {
                q: "Em quanto tempo vou ver resultados?",
                a: "A maioria das mulheres relata alívio dos sintomas já nas primeiras 24-48 horas. O protocolo completo de 7 dias restaura o equilíbrio da flora vaginal."
              },
              {
                q: "Preciso de receita médica?",
                a: "Não. O método utiliza apenas abordagens naturais como alimentação antifúngica, higiene correta e hábitos saudáveis. Não substitui consulta médica quando necessário."
              },
              {
                q: "Como recebo o material?",
                a: "Imediatamente após a confirmação do pagamento, você recebe acesso aos PDFs por email. São arquivos digitais que você pode ler no celular, tablet ou computador."
              },
              {
                q: "O pagamento é seguro?",
                a: "Sim! Utilizamos plataformas de pagamento certificadas e criptografadas. Aceitamos Pix, cartão de crédito e boleto."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-background p-6 rounded-xl border border-border/50"
              >
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-coral/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Você Merece Viver <span className="text-coral">Livre e Leve</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Não deixe a candidíase controlar mais sua vida. Dê o primeiro passo 
            para recuperar seu bem-estar e confiança hoje mesmo.
          </p>
          
          <Button variant="hero" size="xl" onClick={scrollToPrice}>
            Começar Minha Transformação
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-primary-foreground/70">
        <div className="container mx-auto px-4 text-center text-sm">
          <p className="mb-2">© 2024 Thrush-Free Method. Todos os direitos reservados.</p>
          <p>Este produto não substitui orientação médica profissional.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
