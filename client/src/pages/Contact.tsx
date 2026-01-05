import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your project"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Flooring Installation",
  "Staircase Refinishing",
  "Framing",
  "Bathroom Renovation",
  "Basement Renovation",
  "Other",
];

const serviceAreas = [
  "Brampton",
  "Mississauga", 
  "Vaughan",
  "Caledon",
  "Toronto",
  "Etobicoke",
  "Oakville",
  "Burlington",
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours with your free estimate.",
    });
  };

  return (
    <Layout
      title="Contact Us | Diamond Luxury Renovation - Free Estimate Brampton"
      description="Get a free renovation estimate from Diamond Luxury Renovation. Serving Brampton, Mississauga, Vaughan, Caledon, and the GTA. Call (416) 414-9170."
    >
      <section className="py-20 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-contact">
            Get Your Free Estimate
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your renovation project? Contact us today for a free, 
            no-obligation consultation and detailed estimate.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-diamond-900 mb-4">Thank You!</h2>
                      <p className="text-gray-600 mb-6">
                        Your request has been submitted. Our team will contact you within 24 hours 
                        with your free estimate.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-diamond-900 mb-6">Request a Free Estimate</h2>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John Smith" {...field} data-testid="input-name" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="(416) 555-0123" {...field} data-testid="input-phone" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email Address</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="service"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Service Needed</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger data-testid="select-service">
                                        <SelectValue placeholder="Select a service" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {services.map((service) => (
                                        <SelectItem key={service} value={service}>
                                          {service}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Details</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Tell us about your renovation project..." 
                                    className="min-h-[120px]"
                                    {...field} 
                                    data-testid="textarea-message"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <Button 
                            type="submit" 
                            size="lg"
                            className="w-full bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold"
                            disabled={form.formState.isSubmitting}
                            data-testid="button-submit"
                          >
                            <Send className="w-5 h-5 mr-2" />
                            {form.formState.isSubmitting ? "Sending..." : "Get Free Estimate"}
                          </Button>
                        </form>
                      </Form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-diamond-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <a href="tel:4164149170" className="flex items-start space-x-3 group">
                      <div className="w-10 h-10 bg-luxury-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-luxury-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Call Us</p>
                        <p className="font-semibold text-diamond-900 group-hover:text-luxury-600">(416) 414-9170</p>
                      </div>
                    </a>
                    
                    <a href="mailto:gtaprorenovations@gmail.com" className="flex items-start space-x-3 group">
                      <div className="w-10 h-10 bg-luxury-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-luxury-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email Us</p>
                        <p className="font-semibold text-diamond-900 group-hover:text-luxury-600 break-all">gtaprorenovations@gmail.com</p>
                      </div>
                    </a>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-luxury-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-luxury-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Business Hours</p>
                        <p className="font-semibold text-diamond-900">Mon-Fri: 7AM-6PM</p>
                        <p className="font-semibold text-diamond-900">Sat: 8AM-4PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-diamond-900 mb-4">Service Areas</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-luxury-600" />
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-diamond-900">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Need Immediate Help?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Call us directly for urgent renovation needs
                  </p>
                  <a href="tel:4164149170">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-diamond-900 text-center mb-8">Our Service Area</h2>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-500">Map of Greater Toronto Area service region</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
