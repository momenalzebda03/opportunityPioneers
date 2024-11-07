export default {
  css: ["/assets/scss/main.scss", "bootstrap/dist/css/bootstrap.css"],
  app: {
    head: {
      title: "OPPORTUNITY PLONEERS",

      link: [
        {
          rel: "icon",
          href: "http://localhost:3000/_nuxt/assets/images/OpportunityPioneers.png",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },
  devtools: { enabled: true },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
};
