import { BlogCard } from "@/components/BlogCard";
import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import arrowSvg from "@/assets/svg/arrow.svg";

export default function BlogsSection(props) {
  // Handle both direct props and nested blogsGrid structure
  const data = props?.blogsGrid || props;

  // Default data as fallback
  const defaultFeaturedBlog = {
    title:
      "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
    highlightedText: "Ensuring Your HealthTech App",
    description:
      "It's no secret, really, the HealthTech market is absolutely booming right now. Innovation is, of course, driving incredible progress, and that's wonderful to see. But at the heart of this sector, perhaps more than any other, is trust. Patients are sharing truly sensitive data, and understandably, they expect it to be kept safe, completely secure.",
    author: "Marketing WMT",
    date: "Aug 20, 2025",
    tags: ["Latest", "Tech", "Health"],
    imageSrc:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/WMT-Featured-Image-For-Blogs-4-1.png",
    readMoreLink: "#",
  };

  const defaultBlogCards = [
    {
      title:
        "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
      author: "Marketing WMT",
      date: "Aug 20, 2025",
      tags: ["Latest", "Tech", "Health"],
      thumbnailSrc:
        "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/WMT-Featured-Image-For-Blogs-2.png",
      readMoreLink: "#",
    },
    {
      title:
        "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
      author: "Tech Team",
      date: "Aug 18, 2025",
      tags: ["Latest", "Tech", "Health"],
      thumbnailSrc:
        "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/WMT-Featured-Image-For-Blogs-9.png",
      readMoreLink: "#",
    },
    {
      title:
        "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
      author: "Health Expert",
      date: "Aug 15, 2025",
      tags: ["Latest", "Tech", "Health"],
      thumbnailSrc:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80",
      readMoreLink: "#",
    },
    {
      title:
        "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
      author: "Development Team",
      date: "Aug 12, 2025",
      tags: ["Latest", "Tech", "Health"],
      thumbnailSrc:
        "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/WMT-Featured-Image-For-Blogs-2.png",
      readMoreLink: "#",
    },
  ];

  // Extract dynamic data
  const title = data?.title || "Explore Our Latest Insights";
  const subtitle =
    data?.subtitle ||
    "Exploring the latest insights and trends in your industry.";

  // Transform blog data from new structure
  const blogNodes = data?.blogList?.nodes || [];

  // Find featured post (isfeatured: true)
  const featuredPost = blogNodes.find(
    (node) => node.blogCardFields?.isfeatured === true
  );

  // Transform featured post data
  const featuredBlog = featuredPost
    ? {
        title: featuredPost.title,
        highlightedText:
          featuredPost.title?.split(" ").slice(-3).join(" ") ||
          "Latest Insights",
        description:
          featuredPost.blogCardFields?.shortDescription ||
          defaultFeaturedBlog.description,
        author: featuredPost.author?.node?.name || "Author",
        date: new Date().toLocaleDateString(),
        tags: ["Latest"],
        imageSrc:
          featuredPost.blogCardFields?.cardImage?.node?.mediaItemUrl ||
          defaultFeaturedBlog.imageSrc,
        readMoreLink: `/blog/${featuredPost.slug}` || "#",
      }
    : defaultFeaturedBlog;

  // Transform non-featured posts for grid
  const nonFeaturedPosts = blogNodes.filter(
    (node) => node.blogCardFields?.isfeatured !== true
  );
  const blogCards =
    nonFeaturedPosts.length > 0
      ? nonFeaturedPosts.map((post) => ({
          title: post.title,
          author: post.author?.node?.name || "Author",
          date: new Date().toLocaleDateString(),
          tags: ["Latest"],
          thumbnailSrc:
            post.blogCardFields?.cardImage?.node?.mediaItemUrl ||
            defaultBlogCards[0].thumbnailSrc,
          readMoreLink: `/blog/${post.slug}` || "#",
        }))
      : defaultBlogCards;

  // View All button data
  const viewAllButton = { title: "View All Blogs", url: "/blog" };

  return (
    <section className="px-wrapper section-padding-y-v2 ">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 xl:mb-16">
        <h1 className="h2-heading font-bold text-gray-900 mb-4 sm:mb-6">
          {title.includes(" ") ? (
            <>
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient-primary">
                {title.split(" ").slice(-1)[0]}
              </span>
            </>
          ) : (
            <span className="text-gradient-primary">{title}</span>
          )}
        </h1>
        <p className="h2-description max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Blog Grid with Equal Heights */}
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-8 mb-8 sm:mb-12 xl:mb-16">
        {/* Featured Blog - Left 50% on large screens */}
        <div className="lg:w-1/2 order-1 lg:order-none flex">
          <div className="w-full flex flex-col">
            <BlogCard {...featuredBlog} className="h-full flex-1" />
          </div>
        </div>

        {/* Smaller Blog Cards - Right 50% on large screens */}
        <div className="lg:w-1/2 flex order-2 lg:order-none">
          <div className="flex flex-col gap-4 lg:gap-4 w-full h-full">
            {blogCards.slice(0, 3).map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-5 border border-text-disabled flex flex-1 min-h-[140px] sm:min-h-[160px]"
              >
                {/* Image section - responsive width */}
                <div className="flex-shrink-0 w-2/5 sm:w-2/5 lg:w-1/2">
                  <Image
                    height={120}
                    width={200}
                    src={blog.thumbnailSrc || "/placeholder.svg"}
                    alt="Blog thumbnail"
                    className="w-full h-full object-cover rounded-lg border border-disabled-text"
                  />
                </div>

                {/* Content section - responsive width and spacing */}
                <div className="flex flex-col justify-between pl-3 sm:pl-4 lg:pl-4 w-3/5 sm:w-3/5 lg:w-1/2">
                  <div className="flex-1 flex flex-col">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                      {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-[10px] sm:text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-text-primary mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-2 leading-tight flex-1">
                      {blog.title}
                    </h3>

                    {/* Read more link */}
                    <a
                      href={blog.readMoreLink}
                      className="text-primary hover:text-secondary text-xs sm:text-sm lg:text-base font-medium transition-colors duration-200 block mb-2"
                    >
                      Read more
                    </a>
                  </div>

                  {/* Author Info - Pushed to bottom */}
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="w-5 h-5 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-[8px] sm:text-[10px]">
                        {blog.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-text-primary text-[10px] sm:text-xs truncate">
                        {blog.author}
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-text-secondary">
                        {blog.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Blogs Button */}
      <div className="flex justify-center">
        <a href={viewAllButton.url} target={viewAllButton.target || "_self"}>
          <PrimaryButton
            icon={arrowSvg}
            text={viewAllButton.title}
            className="text-white bg-primary-button text-sm arrow-animate"
          />
        </a>
      </div>
    </section>
  );
}