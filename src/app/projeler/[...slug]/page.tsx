export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
