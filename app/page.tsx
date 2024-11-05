import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hey, I'm Faseeh.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a third year Software Engineering student at the University of
          Waterloo who likes making cool stuff.
        </p>
        <p>
          I'm currently working as a Full-Stack Software Developer at{" "}
          <a target="_blank" href="https://portagelabs.io">
            Portage Labs
          </a>
          . I've previously interned at the{" "}
          <a target="_blank" href="https://www.bmo.com/en-ca/main/personal/">
            Bank of Montreal
          </a>{" "}
          and{" "}
          <a target="_blank" href="https://www.constanthealth.ca/">
            Constant Health
          </a>
          .
        </p>
        <p>
          During my free time, I enjoy playing soccer, taking photos,
          travelling, and working on my car.
        </p>
        <p>
          Feel free to check out my{" "}
          <a target="_blank" href={socialLinks.github}>
            Github
          </a>
          , connect with me on{" "}
          <a target="_blank" href={socialLinks.linkedin}>
            LinkedIn
          </a>
          , or shoot me an{" "}
          <a target="_blank" href={socialLinks.email}>
            email
          </a>
          .
        </p>
      </div>
    </section>
  );
}
