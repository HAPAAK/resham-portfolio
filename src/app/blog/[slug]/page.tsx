type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-8">
        Blog Post: {params.slug}
      </h1>
      <p className="text-center">This is a single blog post.</p>
    </div>
  );
}
