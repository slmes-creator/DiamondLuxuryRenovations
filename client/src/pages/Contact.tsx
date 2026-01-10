import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const slugify = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(1, "Please select a location"),
  locationOther: z.string().optional(),
  propertyType: z.string().min(1, "Please select a property type"),
  timeline: z.string().min(1, "Please select a timeline"),
  budget: z.string().min(1, "Please select a budget range"),
  primaryGoal: z.string().min(1, "Please select your primary goal"),
  primaryGoalOther: z.string().optional(),
  followUp: z.string().min(1, "Please select how you'd like us to follow up"),
  message: z.string().optional(),
}).refine((data) => {
  if (data.location === "Other" && (!data.locationOther || data.locationOther.trim() === "")) {
    return false;
  }
  return true;
}, {
  message: "Please enter your city",
  path: ["locationOther"],
}).refine((data) => {
  if (data.primaryGoal === "Other" && (!data.primaryGoalOther || data.primaryGoalOther.trim() === "")) {
    return false;
  }
  return true;
}, {
  message: "Please tell us your main goal",
  path: ["primaryGoalOther"],
});

type ContactFormData = z.infer<typeof contactSchema>;

const locations = [
  "Brampton",
  "Mississauga",
  "Vaughan",
  "Caledon",
  "Toronto",
  "Other",
];

const propertyTypes = [
  "Detached home",
  "Semi-detached",
  "Townhouse",
  "Condo",
  "Rental / investment property",
];

const timelines = [
  "Immediately (0–30 days)",
  "1–3 months",
  "3–6 months",
  "Just researching",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
  "Not sure yet",
];

const primaryGoals = [
  "Increase home value",
  "Update an outdated space",
  "Fix poor workmanship",
  "Improve functionality",
  "Preparing to sell",
  "Other",
];

const followUpOptions = [
  "Call me",
  "Text me first",
  "Not right now",
];

const gtaServiceAreas = [
  "Toronto",
  "Brampton",
  "Mississauga",
  "Vaughan",
  "Caledon",
  "Markham",
  "Richmond Hill",
  "Oakville",
  "Burlington",
  "Pickering",
  "Ajax",
  "Whitby",
  "Oshawa",
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
      location: "",
      locationOther: "",
      propertyType: "",
      timeline: "",
      budget: "",
      primaryGoal: "",
      primaryGoalOther: "",
      followUp: "",
      message: "",
    },
  });

  const watchLocation = form.watch("location");
  const watchPrimaryGoal = form.watch("primaryGoal");

  const onSubmit = async (data: ContactFormData) => {
    try {
      const locationFinal = data.location === "Other" ? data.locationOther : data.location;
      const goalFinal = data.primaryGoal === "Other" ? data.primaryGoalOther : data.primaryGoal;
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          phone: data.phone,
          location: locationFinal,
          property_type: data.propertyType,
          timeline: data.timeline,
          budget: data.budget,
          primary_goal: goalFinal,
          follow_up_preference: data.followUp,
          additional_details: data.message || "None provided",
          subject: `New Lead: ${data.name} - ${data.propertyType} in ${locationFinal}`,
          from_name: "Diamond Luxury Renovations Website",
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Request Submitted!",
          description: "We'll contact you within 24 hours with your free estimate.",
        });
        form.reset();
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      console.log("Form data:", data)
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly at (416) 414-9170.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout
      title="Contact Us | Diamond Luxury Renovation - Free Estimate GTA"
      description="Get a free renovation estimate from Diamond Luxury Renovation. Serving the Greater Toronto Area including Brampton, Mississauga, Vaughan, Toronto, and more. Call (416) 414-9170."
    >
      <section className="py-20 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-contact">
            Get Your Free Estimate
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your renovation project? Tell us about your project 
            and we'll provide a detailed, no-obligation estimate.
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
                      <Button onClick={() => setIsSubmitted(false)} data-testid="button-submit-another">
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-diamond-900 mb-6">Request a Free Estimate</h2>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

                          <div className="border-t pt-6">
                            <FormField
                              control={form.control}
                              name="location"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>What city is the property located in?</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger data-testid="select-location">
                                        <SelectValue placeholder="Select a city" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {locations.map((loc) => (
                                        <SelectItem key={loc} value={loc}>
                                          {loc}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {watchLocation === "Other" && (
                              <FormField
                                control={form.control}
                                name="locationOther"
                                render={({ field }) => (
                                  <FormItem className="mt-3">
                                    <FormControl>
                                      <Input placeholder="Enter your city" {...field} data-testid="input-location-other" />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            )}
                          </div>

                          <FormField
                            control={form.control}
                            name="propertyType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>What type of property is this?</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
                                  >
                                    {propertyTypes.map((type) => (
                                      <div key={type} className="flex items-center space-x-2">
                                        <RadioGroupItem value={type} id={`property-${slugify(type)}`} data-testid={`radio-property-${slugify(type)}`} />
                                        <label htmlFor={`property-${slugify(type)}`} className="text-sm font-medium cursor-pointer">
                                          {type}
                                        </label>
                                      </div>
                                    ))}
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="timeline"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>When are you hoping to start this project?</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
                                  >
                                    {timelines.map((time) => (
                                      <div key={time} className="flex items-center space-x-2">
                                        <RadioGroupItem value={time} id={`timeline-${slugify(time)}`} data-testid={`radio-timeline-${slugify(time)}`} />
                                        <label htmlFor={`timeline-${slugify(time)}`} className="text-sm font-medium cursor-pointer">
                                          {time}
                                        </label>
                                      </div>
                                    ))}
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Where do you see your project budget landing?</FormLabel>
                                <FormDescription className="text-sm text-gray-500">
                                  To make sure we're a good fit and respect your time...
                                </FormDescription>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
                                  >
                                    {budgetRanges.map((range) => (
                                      <div key={range} className="flex items-center space-x-2">
                                        <RadioGroupItem value={range} id={`budget-${slugify(range)}`} data-testid={`radio-budget-${slugify(range)}`} />
                                        <label htmlFor={`budget-${slugify(range)}`} className="text-sm font-medium cursor-pointer">
                                          {range}
                                        </label>
                                      </div>
                                    ))}
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="primaryGoal"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>What's the main reason you're considering this renovation?</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
                                  >
                                    {primaryGoals.map((goal) => (
                                      <div key={goal} className="flex items-center space-x-2">
                                        <RadioGroupItem value={goal} id={`goal-${slugify(goal)}`} data-testid={`radio-goal-${slugify(goal)}`} />
                                        <label htmlFor={`goal-${slugify(goal)}`} className="text-sm font-medium cursor-pointer">
                                          {goal}
                                        </label>
                                      </div>
                                    ))}
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {watchPrimaryGoal === "Other" && (
                            <FormField
                              control={form.control}
                              name="primaryGoalOther"
                              render={({ field }) => (
                                <FormItem className="-mt-4">
                                  <FormControl>
                                    <Input placeholder="Tell us your main goal" {...field} data-testid="input-goal-other" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}

                          <FormField
                            control={form.control}
                            name="followUp"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>If this looks like a good fit, how would you prefer we follow up?</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2"
                                  >
                                    {followUpOptions.map((option) => (
                                      <div key={option} className="flex items-center space-x-2">
                                        <RadioGroupItem value={option} id={`followup-${slugify(option)}`} data-testid={`radio-followup-${slugify(option)}`} />
                                        <label htmlFor={`followup-${slugify(option)}`} className="text-sm font-medium cursor-pointer">
                                          {option}
                                        </label>
                                      </div>
                                    ))}
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Additional Details (Optional)</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Any other details you'd like to share about your project..." 
                                    className="min-h-[100px]"
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
                    
                    <a href="mailto:diamondluxuryrenovations@gmail.com" className="flex items-start space-x-3 group min-w-0">
                      <div className="w-10 h-10 bg-luxury-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-luxury-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-gray-500">Email Us</p>
                        <p className="font-semibold text-diamond-900 group-hover:text-luxury-600 text-sm truncate">diamondluxuryrenovations@gmail.com</p>
                      </div>
                    </a>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-luxury-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-luxury-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Business Hours</p>
                        <p className="font-semibold text-diamond-900">Mon-Sun: 6AM-11PM</p>
                      </div>
                    </div>
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
                      data-testid="button-call-now"
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
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-diamond-900 mb-4">
              Serving the Greater Toronto Area (GTA)
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diamond Luxury Renovations proudly serves homeowners across the Greater Toronto Area. 
              From downtown Toronto to the surrounding suburbs, we bring quality craftsmanship to your doorstep.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369076.52073498!2d-79.74931739999999!3d43.7181557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1704900000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diamond Luxury Renovations Service Area - Greater Toronto Area"
              data-testid="map-gta"
            />
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-8">
            Don't see your city on the map? Contact us — we may still be able to serve your area.
          </p>
        </div>
      </section>
    </Layout>
  );
}
