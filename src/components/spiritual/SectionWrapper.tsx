export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
