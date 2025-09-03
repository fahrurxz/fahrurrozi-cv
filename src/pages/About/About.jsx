import HeroImg from "@/assets/images/hero.jpg";
export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Automation Engineer, Security Researcher, Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Fahrur Rozi, a passionate Full-Stack Developer & Automation Engineer
                with 5+ years of experience in designing and building digital products.{" "}
                <span className="font-bold text-white">
                  I specialize in Python automation, backend development, and API integration
                </span>
                , with a strong understanding of frontend technologies and UI/UX design.
              </p>
              <p className="text-white">
                My focus is on leveraging AI tools to enhance development efficiency and solving 
                business-oriented problems. I excel in automating vital business processes, 
                developing backend systems, and creating seamless integrations between various services.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and problem solver, driven by a passion for creating 
                    efficient digital solutions. With expertise in automation, cyber security, 
                    and full-stack development, I'm dedicated to delivering business value through 
                    innovative technology solutions.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Fahrur Rozi
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
