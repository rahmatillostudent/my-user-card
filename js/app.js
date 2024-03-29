const projects = [
  {
    title: "AkademNashr",
    githubLink: "rahmatillostudent/akademnashr",
    vercelLink: "akademnashr-fn-23.netlify.app",
  },
  {
    title: "Ansormed",
    githubLink: " https://rahmatillostudent.github.io/ansormed/",
    vercelLink: "ansormed-fn-23.netlify.app",
  },
  {
    title: "My Cart",
    githubLink: "https://rahmatillostudent.github.io/my-user-card/",
    vercelLink: "myusercard.netlify.app",
  },
  {
    title: "My Cart",
    githubLink: "https://rahmatillostudent.github.io/fn-23-3/",
    vercelLink: "fn-23-3.netlify.app",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
