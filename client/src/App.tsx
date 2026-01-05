import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import About from "@/pages/About";
import ServicesOverview from "@/pages/ServicesOverview";
import Portfolio from "@/pages/Portfolio";
import Testimonials from "@/pages/Testimonials";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";

import Flooring from "@/pages/services/Flooring";
import Staircase from "@/pages/services/Staircase";
import Framing from "@/pages/services/Framing";
import Bathroom from "@/pages/services/Bathroom";
import Basement from "@/pages/services/Basement";

import Brampton from "@/pages/service-area/Brampton";
import Mississauga from "@/pages/service-area/Mississauga";
import Vaughan from "@/pages/service-area/Vaughan";
import Caledon from "@/pages/service-area/Caledon";
import Toronto from "@/pages/service-area/Toronto";

import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import Terms from "@/pages/legal/Terms";
import Accessibility from "@/pages/legal/Accessibility";

import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={ServicesOverview} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      
      <Route path="/services/flooring" component={Flooring} />
      <Route path="/services/staircase" component={Staircase} />
      <Route path="/services/framing" component={Framing} />
      <Route path="/services/bathroom" component={Bathroom} />
      <Route path="/services/basement" component={Basement} />
      
      <Route path="/service-area/brampton" component={Brampton} />
      <Route path="/service-area/mississauga" component={Mississauga} />
      <Route path="/service-area/vaughan" component={Vaughan} />
      <Route path="/service-area/caledon" component={Caledon} />
      <Route path="/service-area/toronto" component={Toronto} />
      
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/accessibility" component={Accessibility} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
