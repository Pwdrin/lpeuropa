import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import productMockup from "@/assets/product-mockup.png";
import { FlowerButton } from "@/components/FlowerButton";
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
        <div className="absolute inset-0 bg-background/70 sm:bg-background/65 sm:bg-gradient-to-r sm:from-background/65 sm:via-background/65 sm:to-transparent" />
        
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center sm:text-left">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-sage-light text-sage-dark rounded-full text-sm font-medium mb-6 animate-fade-in">
              100% Natural and Scientific Method
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-snug mb-6 animate-slide-up">
              Get Rid of Thrush
              <span className="block text-coral">Once and for All</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up animation-delay-200">
              The complete guide that has already helped thousands of women restore their intimate health 
              naturally, without harsh medications or side effects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center animate-slide-up animation-delay-400">
              <Button variant="hero" size="xl" onClick={scrollToPrice}>
                I Want Freedom Now
              </Button>
              <Button variant="outline-coral" size="lg" onClick={scrollToPrice}>
                See Method Details
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
              Do You Recognise <span className="text-coral">These Symptoms?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Recurrent thrush can affect much more than just your physical health
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Intense itching that won't go away",
              "Thick white discharge",
              "Pain during intimacy",
              "Redness and swelling",
              "Constant burning sensation",
              "Treatments that don't work"
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
            If you identified with any of these points, know that <span className="text-coral font-semibold">there is a natural solution</span> that goes far beyond conventional medicines.
          </p>
        </div>


        <div className="flex justify-center mt-6">
          <Button variant="hero" size="xl" onClick={scrollToPrice}>
            Get Now
          </Button>
        </div>

      
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-coral font-semibold uppercase tracking-wider text-sm">The Solution</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
                Thrush-Free Method: The Natural Path to Freedom
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                A complete science-based system that treats the root cause of thrush, 
                not just the symptoms. Designed to restore vaginal flora balance 
                naturally and permanently.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "Based on scientific evidence" },
                  { icon: Leaf, text: "100% natural, no side effects" },
                  { icon: Clock, text: "Visible results in 7 days" },
                  { icon: Heart, text: "Prevents relapses permanently" },
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
              What You Will <span className="text-coral">Receive</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A complete kit with everything you need for your recovery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Main Guide: Thrush-Free Method",
                description: "The complete 7-day method to restore your intimate health. Includes understanding vaginal flora, causes of thrush, and a detailed treatment plan.",
                value: "£29",
                icon: Sparkles
              },
              {
                title: "Quick Guide: Relief in 24 Hours",
                description: "Immediate steps to control symptoms and start your recovery from day one.",
                value: "£15",
                icon: Clock
              },
              {
                title: "7-Day Meal Plan",
                description: "Complete menu with delicious anti-fungal recipes. Breakfast, lunch, and dinner for every day.",
                value: "£19",
                icon: Leaf
              },
              {
                title: "Anti-Relapse Mini Guide",
                description: "10 simple steps to never suffer from recurrent thrush again. Daily habits and weekly checklist.",
                value: "£12",
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
                    <span className="text-sage font-semibold text-sm">Value: {item.value}</span>
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
              Transformation <span className="text-coral">Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real women who reclaimed their quality of life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Kelly S.",
                text: "After years of suffering from recurrent thrush, I finally found something that works. In less than a week I already felt a difference!",
                rating: 5
              },
              {
                name: "Diana P.",
                text: "The meal plan made all the difference. I didn't imagine diet had so much influence. Highly recommend!",
                rating: 5
              },
              {
                name: "Suzy M.",
                text: "I had tried everything. This method was the only one that treated the real cause of the problem. 6 months without any relapse.",
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
              Special Limited Time Offer
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Invest in Your Health Today
            </h2>
            
            <div className="bg-background p-8 md:p-12 rounded-3xl shadow-medium border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-coral text-primary-foreground px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                Complete Kit
              </div>
              
              <div className="mb-8">
                <p className="text-muted-foreground line-through text-lg mb-2">From £75.00</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl text-muted-foreground">£</span>
                  <span className="font-serif text-6xl md:text-7xl font-bold text-coral">15</span>
                  <span className="text-muted-foreground">.00</span>
                </div>
                <p className="text-sage font-semibold mt-2">One-time payment</p>
              </div>
              
              <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                {[
                  "Thrush-Free Method Main Guide",
                  "24-Hour Relief Guide",
                  "7-Day Meal Plan",
                  "Anti-Relapse Mini Guide",
                  "Lifetime access and updates",
                  "14-day guarantee"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-sage shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" size="xl" className="w-full max-w-md mb-4">
                I Want My Access Now
              </Button>
              
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                100% secure purchase. Payment via Credit Card or PayPal.
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
              14-Day Guarantee
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Your satisfaction is our priority. If for any reason you are not satisfied 
              with the method in the first 7 days, we will refund 100% of your investment. 
              No questions asked, no hassle.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-coral">Questions</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Does the method work for recurrent thrush?",
                a: "Yes! The method was developed specifically to treat the root cause of thrush, preventing relapses naturally and permanently."
              },
              {
                q: "How soon will I see results?",
                a: "Most women report symptom relief within the first 24-48 hours. The complete 7-day protocol restores the balance of the vaginal flora."
              },
              {
                q: "Do I need a prescription?",
                a: "No. The method uses only natural approaches such as anti-fungal diet, correct hygiene and healthy habits. It does not replace medical advice when necessary."
              },
              {
                q: "How do I receive the material?",
                a: "Immediately after payment confirmation, you receive access to the PDFs by email. These are digital files you can read on your mobile, tablet or computer."
              },
              {
                q: "Is the payment secure?",
                a: "Yes! We use certified and encrypted payment platforms. We accept major credit cards and PayPal."
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
            You Deserve to Live <span className="text-coral">Free and Light</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Don't let thrush control your life anymore. Take the first step 
            to recover your well-being and confidence today.
          </p>
          
          <Button variant="hero" size="xl" onClick={scrollToPrice}>
            Start My Transformation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-primary-foreground/70">
        <div className="container mx-auto px-4 text-center text-sm">
          <p className="mb-2">© 2024 Thrush-Free Method. All rights reserved.</p>
          <p>This product does not replace professional medical advice.</p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FlowerButton onClick={scrollToPrice} />
    </div>
  );
};

export default Index;
