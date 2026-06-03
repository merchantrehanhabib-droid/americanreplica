import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import PortfolioPage from "@/pages/PortfolioPage";
import PricingPage from "@/pages/PricingPage";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";
import TestimonialsPage from "@/pages/TestimonialsPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* About */}
      <Route path="/about" component={AboutPage} />
      <Route path="/about/our-story" component={AboutPage} />
      <Route path="/about/our-team" component={AboutPage} />
      <Route path="/about/why-choose-us" component={AboutPage} />
      <Route path="/about/awards" component={AboutPage} />

      {/* Services */}
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/:slug" component={ServiceDetailPage} />

      {/* Portfolio */}
      <Route path="/portfolio" component={PortfolioPage} />

      {/* Pricing */}
      <Route path="/pricing" component={PricingPage} />
      <Route path="/pricing/writing" component={PricingPage} />
      <Route path="/pricing/editing" component={PricingPage} />
      <Route path="/pricing/publishing" component={PricingPage} />
      <Route path="/pricing/marketing" component={PricingPage} />
      <Route path="/pricing/combo" component={PricingPage} />

      {/* Blog */}
      <Route path="/blog" component={BlogPage} />

      {/* Contact */}
      <Route path="/contact" component={ContactPage} />

      {/* Testimonials */}
      <Route path="/testimonials" component={TestimonialsPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
