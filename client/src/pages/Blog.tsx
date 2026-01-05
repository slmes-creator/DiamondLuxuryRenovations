import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    title: "10 Kitchen Renovation Trends for 2024",
    excerpt: "Discover the latest trends in kitchen design, from smart appliances to sustainable materials that are transforming modern kitchens.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
    date: "December 15, 2024",
    readTime: "5 min read",
    author: "Ronald",
    category: "Kitchen",
  },
  {
    title: "How to Budget for Your Bathroom Renovation",
    excerpt: "A comprehensive guide to planning and budgeting for your dream bathroom, including tips on where to splurge and where to save.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600",
    date: "December 10, 2024",
    readTime: "7 min read",
    author: "Sarah",
    category: "Bathroom",
  },
  {
    title: "Hardwood vs. Engineered Flooring: Which is Right for You?",
    excerpt: "Compare the pros and cons of solid hardwood and engineered flooring to make the best choice for your home and lifestyle.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    date: "December 5, 2024",
    readTime: "6 min read",
    author: "Michael",
    category: "Flooring",
  },
  {
    title: "Transform Your Basement: Ideas That Add Value",
    excerpt: "Explore creative basement renovation ideas that not only enhance your living space but also increase your home's resale value.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
    date: "November 28, 2024",
    readTime: "8 min read",
    author: "Ronald",
    category: "Basement",
  },
  {
    title: "The Art of Custom Carpentry: Why Details Matter",
    excerpt: "Learn why investing in custom carpentry can transform ordinary spaces into extraordinary ones with timeless craftsmanship.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600",
    date: "November 20, 2024",
    readTime: "5 min read",
    author: "Ronald",
    category: "Carpentry",
  },
  {
    title: "Choosing the Right Contractor: A Homeowner's Guide",
    excerpt: "Essential tips for finding and vetting a renovation contractor, including red flags to watch out for and questions to ask.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600",
    date: "November 15, 2024",
    readTime: "10 min read",
    author: "Sarah",
    category: "Tips",
  },
];

export default function Blog() {
  return (
    <Layout>
      <PageHero
        title="Renovation Insights"
        subtitle="Expert tips, trends, and inspiration for your home renovation journey"
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-diamond-900 mb-4" data-testid="text-blog-title">
              Latest Articles
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with our expert insights on renovation trends, budgeting tips, and design inspiration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-blog-${index}`}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-luxury-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-diamond-900 mb-2 group-hover:text-luxury-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                    <User className="w-4 h-4 text-luxury-500" />
                    <span className="text-sm text-gray-600">By {post.author}</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-diamond-900 hover:text-luxury-600 group"
                    data-testid={`button-read-${index}`}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-diamond-900 mb-4" data-testid="text-newsletter-title">
            Stay Updated
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest renovation tips, trends, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-luxury-500"
              data-testid="input-newsletter-email"
            />
            <Button className="bg-gradient-to-r from-luxury-500 to-luxury-600 hover:from-luxury-600 hover:to-luxury-700 text-white px-8 rounded-full" data-testid="button-subscribe">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
