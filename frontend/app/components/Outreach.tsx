import Image from "next/image";

export default function Outreach() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-12 md:py-16">
      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-16">
        <div className="flex-1">
          <h2 className="mb-3 text-lg font-bold text-foreground sm:mb-4 sm:text-xl md:text-3xl">
            Partner With Us
          </h2>
          <p className="text-sm leading-relaxed text-foreground/70 sm:text-base md:text-lg">
            Are you interested in partnering with Claude for your organization or an event around Cork? Reach out at{" "}
            <a
              href="mailto:claudebuildersclubucc@gmail.com"
              className="font-semibold text-primary underline transition-colors hover:text-primary-dark"
            >
              claudebuildersclubucc@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="flex shrink-0 items-center justify-center">
          <Image
            src="/images/claude-icons/hands.png"
            alt="Partnership hands icon"
            width={280}
            height={280}
            className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64"
          />
        </div>
      </div>
    </section>
  );
}
