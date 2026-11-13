// Projects from https://github.com/NinjaDev1droid
// To add a project, copy one object and fill in the fields.
// `demo` is optional — leave it out if the project has no live site.

const GITHUB = "https://github.com/NinjaDev1droid";

const projects = [
    {
        title: "DropSet",
        description:
            "Free tools for DJs: setlist builder, track library, gig tracker, caption generator and press kit — all in the browser.",
        tags: ["JavaScript", "HTML", "CSS"],
        repo: `${GITHUB}/dropset`,
        demo: "https://ninjadev1droid.github.io/dropset/",
        featured: true,
    },
    {
        title: "DJ Taban Portfolio",
        description:
            "Official site for an Afrobeats DJ in Tel Aviv, with live Mixcloud mixes, YouTube videos, venues, booking contact and EN/AR/HE support.",
        tags: ["HTML", "CSS", "JavaScript"],
        repo: `${GITHUB}/djtaban`,
        demo: "https://ninjadev1droid.github.io/djtaban/",
        featured: true,
    },
    {
        title: "Women's Day Letter",
        description:
            "An interactive International Women's Day letter that opens out of an animated envelope.",
        tags: ["HTML", "CSS"],
        repo: `${GITHUB}/CL`,
        demo: "https://ninjadev1droid.github.io/CL/",
    },
    {
        title: "Weather App",
        description:
            "Search any city and get the current temperature and conditions from the OpenWeatherMap API.",
        tags: ["React", "JavaScript", "CSS"],
        repo: `${GITHUB}/Weather-App`,
    },
    {
        title: "PinkHost",
        description:
            "Landing page for a web-hosting company, with a hero section, pricing plans and a contact form.",
        tags: ["HTML", "CSS"],
        repo: `${GITHUB}/king_G`,
    },
    {
        title: "Personal Portfolio",
        description:
            "This website — a React portfolio with animated particles, an email contact form and Firebase login.",
        tags: ["React", "Firebase", "Bootstrap"],
        repo: `${GITHUB}/my-website-`,
    },
];

export default projects;
