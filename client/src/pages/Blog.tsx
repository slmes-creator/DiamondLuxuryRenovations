import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "hardwood-vs-laminate-flooring-guide",
    title: "Hardwood vs Laminate Flooring: The Complete Guide for Brampton Homeowners",
    excerpt: "Discover the pros and cons of hardwood and laminate flooring to make the best choice for your home renovation project.",
    category: "Flooring",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2787&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "bathroom-renovation-budgeting-tips",
    title: "Bathroom Renovation Budgeting: How to Get Luxury Results Without Breaking the Bank",
    excerpt: "Expert tips on planning your bathroom renovation budget, including where to splurge and where to save.",
    category: "Bathroom",
    date: "December 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2787&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "basement-finishing-ideas-2025",
    title: "Top Basement Finishing Ideas for 2025: Transform Your Space",
    excerpt: "From home theaters to guest suites, explore the hottest basement renovation trends and ideas.",
    category: "Basement",
    date: "December 5, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "staircase-design-trends",
    title: "Modern Staircase Design Trends: Update Your Home's Focal Point",
    excerpt: "Learn how a staircase refinishing project can dramatically transform your home's aesthetics.",
    category: "Staircase",
    date: "November 28, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2787&auto=format&fit=crop",
  },
  {
    id: 5,
    slug: "choosing-right-contractor-brampton",
    title: "How to Choose the Right Renovation Contractor in Brampton",
    excerpt: "Essential questions to ask and red flags to watch for when hiring a general contractor.",
    category: "Tips",
    date: "November 20, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 6,
    slug: "winter-renovation-projects",
    title: "Best Winter Renovation Projects: Make the Most of the Cold Season",
    excerpt: "Why winter is actually a great time for indoor renovations and which projects to prioritize.",
    category: "Tips",
    date: "November 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2938&auto=format&fit=crop",
  },
];

const categories = ["All", "Flooring", "Bathroom", "Basement", "Staircase", "Tips"];

export default function Blog() {
  return (
    <Layout
      title="Renovation Blog & Tips | Diamond Luxury Renovation"
      description="Expert renovation tips, guides, and insights for Brampton homeowners. Learn about flooring, bathrooms, basements, and more."
    >
      <section className="py-20 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-blog">
            Renovation Insights & Tips
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert advice, trends, and guides to help you plan your next 
            renovation project in Brampton and the GTA.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" 
                  ? "bg-diamond-900 text-white" 
                  : "border-diamond-300 text-diamond-700 hover:bg-diamond-50"}
                data-testid={`button-category-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow h-full" data-testid={`card-blog-${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 flex flex-col h-[calc(100%-192px)]">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-diamond-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t">
                    <span className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                    <Button variant="ghost" size="sm" className="text-luxury-600 hover:text-luxury-700">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-diamond-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Have a Renovation Question?</h2>
          <p className="text-gray-300 mb-8">
            Our experts are here to help. Contact us for personalized advice on your project.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold"
              data-testid="button-blog-cta"
            >
              Ask Our Experts
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
