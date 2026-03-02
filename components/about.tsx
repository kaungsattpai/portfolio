interface AboutProps {
  data: {
    about: string;
  };
}

export default function About({ data }: AboutProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-foreground mb-8">About</h2>
      <div className="max-w-3xl">
        <p className="text-foreground leading-relaxed text-base">
          {data.about}
        </p>
        <p className="text-foreground leading-relaxed text-base mt-6">
          Eager to contribute technical expertise and innovative thinking to impactful software solutions. With proven experience in AWS and Nginx deployment, I ensure production-ready applications that perform seamlessly at scale.
        </p>
      </div>
    </section>
  );
}
