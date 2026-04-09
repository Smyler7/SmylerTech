import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Cpu, Globe, Lock, Menu, Shield, Zap, Check, Github, Twitter, Linkedin } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const AnimatedLogo = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary shrink-0"
  >
    <motion.rect
      width="32"
      height="32"
      rx="8"
      fill="currentColor"
    />
    <motion.path
      d="M16 8L24 16L16 24L8 16L16 8Z"
      className="stroke-primary-foreground"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ rotate: 0, scale: 0.8 }}
      animate={{ rotate: 90, scale: 1 }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
      style={{ transformOrigin: "center" }}
    />
    <motion.circle
      cx="16"
      cy="16"
      r="2"
      className="fill-primary-foreground"
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.svg>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AnimatedLogo />
            <span className="font-bold text-xl tracking-tight">SmylerTech</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#products" className="hover:text-foreground transition-colors">Products</a>
            <a href="#solutions" className="hover:text-foreground transition-colors">Solutions</a>
            <a href="#developers" className="hover:text-foreground transition-colors">Developers</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-sm">Sign In</Button>
            <Button className="text-sm rounded-full px-6">Get Started</Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon"><Menu className="w-5 h-5" /></Button>} />
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#products" className="text-lg font-medium">Products</a>
                  <a href="#solutions" className="text-lg font-medium">Solutions</a>
                  <a href="#developers" className="text-lg font-medium">Developers</a>
                  <a href="#pricing" className="text-lg font-medium">Pricing</a>
                  <div className="h-px bg-border my-4" />
                  <Button variant="outline" className="w-full justify-center">Sign In</Button>
                  <Button className="w-full justify-center">Get Started</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 border border-border/50">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                  SmylerTech OS 2.0 is now live
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Infrastructure for the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">next generation.</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                SmylerTech provides the foundational APIs and tools to build, scale, and secure your applications globally with zero configuration.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button size="lg" className="h-12 px-8 rounded-full text-base w-full sm:w-auto group">
                  Start Building
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base w-full sm:w-auto">
                  Read the Docs
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-secondary/30 border-y border-border/40" id="products">
          <div className="container mx-auto px-4">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need to scale</h2>
              <p className="text-muted-foreground text-lg">Powerful primitives designed for modern engineering teams. Built for performance, reliability, and developer experience.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-primary" />,
                  title: "Edge Compute",
                  description: "Deploy your code globally in milliseconds. Run functions closer to your users for zero-latency experiences."
                },
                {
                  icon: <Shield className="w-6 h-6 text-primary" />,
                  title: "Enterprise Security",
                  description: "Bank-grade encryption, DDoS protection, and compliance certifications built into the platform by default."
                },
                {
                  icon: <Globe className="w-6 h-6 text-primary" />,
                  title: "Global Database",
                  description: "Distributed SQL database that scales automatically. Never worry about sharding or replication again."
                },
                {
                  icon: <Code2 className="w-6 h-6 text-primary" />,
                  title: "Developer API",
                  description: "RESTful and GraphQL APIs with comprehensive documentation, SDKs for every major language, and CLI tools."
                },
                {
                  icon: <Lock className="w-6 h-6 text-primary" />,
                  title: "Identity & Auth",
                  description: "Drop-in authentication with support for passkeys, OAuth, SAML, and multi-factor authentication."
                },
                {
                  icon: <Cpu className="w-6 h-6 text-primary" />,
                  title: "AI Infrastructure",
                  description: "Access powerful LLMs and machine learning models through a unified API with built-in rate limiting."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="p-6 h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 relative overflow-hidden" id="solutions">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Solutions for every industry</h2>
              <p className="text-lg text-muted-foreground">
                Whether you're building a high-frequency trading platform or a global e-commerce store, SmylerTech has the infrastructure you need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Fintech & Web3",
                  description: "Ultra-low latency compute and globally distributed ledgers for financial applications.",
                  tags: ["Zero-latency", "ACID Compliant", "SOC2"],
                  color: "from-blue-500/10 to-cyan-500/10"
                },
                {
                  title: "E-Commerce",
                  description: "Handle Black Friday traffic spikes with auto-scaling edge functions and cached databases.",
                  tags: ["Auto-scaling", "Edge Caching", "99.999% Uptime"],
                  color: "from-orange-500/10 to-red-500/10"
                },
                {
                  title: "Artificial Intelligence",
                  description: "Serverless GPU compute and vector databases optimized for LLM inference and RAG pipelines.",
                  tags: ["GPU Compute", "Vector DB", "Model Hosting"],
                  color: "from-purple-500/10 to-pink-500/10"
                },
                {
                  title: "SaaS Platforms",
                  description: "Multi-tenant architecture primitives, built-in billing integrations, and role-based access control.",
                  tags: ["Multi-tenant", "Auth", "Billing"],
                  color: "from-green-500/10 to-emerald-500/10"
                }
              ].map((solution, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="p-8 h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors relative overflow-hidden group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {solution.tags.map((tag, j) => (
                          <span key={j} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="py-32 overflow-hidden" id="developers">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built for developers.</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Integrate SmylerTech into your stack with just a few lines of code. Our SDKs are fully typed, thoroughly tested, and designed for maximum productivity.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Type-safe SDKs for TypeScript, Python, and Go",
                    "Local development emulator suite",
                    "Automated CI/CD integrations",
                    "Real-time observability and logging"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="rounded-full px-6">
                  Explore Documentation
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-xl blur opacity-20" />
                <div className="relative rounded-xl border border-border/50 bg-[#0d0d0d] overflow-hidden">
                  <div className="flex items-center px-4 py-3 border-b border-border/50 bg-[#1a1a1a]">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="mx-auto text-xs text-muted-foreground font-mono">index.ts</div>
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <pre className="text-sm font-mono leading-relaxed">
                      <code className="text-gray-300">
                        <span className="text-purple-400">import</span> {"{ Smyler }"} <span className="text-purple-400">from</span> <span className="text-green-400">'@smylertech/sdk'</span>;<br/><br/>
                        <span className="text-gray-500">// Initialize the client</span><br/>
                        <span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-yellow-200">Smyler</span>({"{"}<br/>
                        {"  "}apiKey: process.env.<span className="text-blue-400">SMYLER_API_KEY</span>,<br/>
                        {"  "}region: <span className="text-green-400">'global'</span><br/>
                        {"}"});<br/><br/>
                        <span className="text-gray-500">// Deploy a serverless function</span><br/>
                        <span className="text-purple-400">await</span> client.compute.<span className="text-blue-300">deploy</span>({"{"}<br/>
                        {"  "}name: <span className="text-green-400">'api-gateway'</span>,<br/>
                        {"  "}runtime: <span className="text-green-400">'node20'</span>,<br/>
                        {"  "}entrypoint: <span className="text-green-400">'./src/index.ts'</span>,<br/>
                        {"  "}scaling: {"{"} min: <span className="text-orange-300">0</span>, max: <span className="text-orange-300">100</span> {"}"}<br/>
                        {"}"});<br/><br/>
                        <span className="text-blue-300">console</span>.<span className="text-blue-300">log</span>(<span className="text-green-400">'Deployed to 32 edge locations 🚀'</span>);
                      </code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-secondary/30 border-y border-border/40" id="pricing">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
              <p className="text-lg text-muted-foreground">
                Built for Zimbabwean developers and businesses. Scale globally, pay locally in ZiG.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Hobby Tier */}
              <Card className="p-8 bg-background/50 backdrop-blur-sm border-border/50 flex flex-col">
                <h3 className="text-2xl font-semibold mb-2">Hobby</h3>
                <p className="text-muted-foreground mb-6">Perfect for side projects and learning.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">ZiG 0</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {['100k requests/month', 'Global Edge Network', 'Community Support', '1GB Database Storage'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">Get Started</Button>
              </Card>

              {/* Pro Tier */}
              <Card className="p-8 bg-background/50 backdrop-blur-sm border-primary/50 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
                <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                  Most Popular
                </div>
                <h3 className="text-2xl font-semibold mb-2">Pro</h3>
                <p className="text-muted-foreground mb-6">For production applications and teams.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">ZiG 450</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {['10M requests/month', 'Advanced Analytics', 'Email Support', '50GB Database Storage', 'Custom Domains'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Upgrade to Pro</Button>
              </Card>

              {/* Enterprise Tier */}
              <Card className="p-8 bg-background/50 backdrop-blur-sm border-border/50 flex flex-col">
                <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                <p className="text-muted-foreground mb-6">Custom infrastructure for large scale.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {['Unlimited requests', 'Dedicated Infrastructure', '24/7 Phone Support', 'Custom SLAs', 'SOC2 Compliance'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to build the future?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies building on SmylerTech. Start for free, scale when you need to.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 rounded-full text-base w-full sm:w-auto">
                Create Free Account
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base w-full sm:w-auto bg-background/50 backdrop-blur-sm">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border/40 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <AnimatedLogo />
                <span className="font-bold text-lg tracking-tight">SmylerTech</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs mb-6">
                Building the foundational infrastructure for the next generation of software companies.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/SmylerTech" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 cursor-pointer transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/SmylerTech" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 cursor-pointer transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/company/smylertech" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 cursor-pointer transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Compute</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Database</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Storage</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Identity</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">AI Platform</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">System Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Customers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} SmylerTech Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
