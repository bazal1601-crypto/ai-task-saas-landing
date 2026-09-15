import "./Blog.css";

const posts = [
  {
    tag: "Product",
    title: "5 ways AI is reshaping team onboarding",
    excerpt: "How modern teams are cutting onboarding time in half using adaptive training paths.",
    date: "Aug 12, 2026",
    readTime: "4 min read",
  },
  {
    tag: "Guides",
    title: "Building a knowledge base people actually use",
    excerpt: "A practical framework for organizing team knowledge so it doesn't go stale.",
    date: "Jul 28, 2026",
    readTime: "6 min read",
  },
  {
    tag: "Case Study",
    title: "How growing teams cut training time by 40%",
    excerpt: "A look at how mid-size teams streamlined workflows with automated training loops.",
    date: "Jul 15, 2026",
    readTime: "5 min read",
  },
];

export default function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="section-heading">
        <div className="eyebrow">✦ &nbsp; From the Blog</div>
        <h2>Insights on smarter team training</h2>
        <p>Tips, guides, and stories on building better workflows.</p>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.title}>
            <span className="blog-tag">{post.tag}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="blog-meta">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}