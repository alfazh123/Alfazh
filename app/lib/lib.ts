const books = [
    {
        id: "1",
        title: "Laut Bercerita",
        author: ["Leila S. Chudori"],
        year: 2017,
        description:
            "Sebuah novel yang menceritakan tentang keluarga, sahabat, kekasih yang kehilangan pada kejadian tahun 1998 yang lalu.",
        image_url: "/books/laut-bercerita.jpg",
        link: "",
    },
    {
        id: "2",
        title: "Pulang",
        author: ["Tere Liye"],
        year: 2015,
        description: "A portrait of a woman with an enigmatic smile.",
        image_url: "/books/pulang.jpg",
        link: "",
    },
    {
        id: "3",
        title: "Padang Bulan",
        author: ["Andrea Hirata"],
        year: 2015,
        description: "",
        image_url: "/books/Padang-bulan.jpg",
        link: "",
    },
];

const projects = [
    {
        id: "1",
        title: "ACE 2024",
        year: 2024,
        description:
            "An application for Campus Expo event on Qomaruddin boarding school.",
        src: "/ace2024.png",
        href: "https://ace2024.vercel.app",
        tag: ["NextJS", "MDX"],
    },
    {
        id: "2",
        title: "Redesign KediriKab",
        year: 2023,
        description:
            "Redesign KediriKab website with NextJS, TailwindCSS DaisyUI.",
        src: "/kediriweb.png",
        href: "https://github.com/alfazh123/redesign_kedirikab",
        tag: ["NextJS"],
    },
];

const art = [
    {
        id: "1",
        title: "The Starry Night",
        "image-url": "/art1.png",
    },
    {
        id: "2",
        title: "The Starry Night",
        "image-url": "/art2.png",
    },
];

const hobbys = [
    {
        title: "Book",
        description: "Books i've read.",
        link: "/books",
    },
    {
        title: "Blogs",
        description: "Blogs",
        link: "/blog",
    },
    {
        title: "Art & Photography",
        description: "Art & Photography by Alfazh",
        link: "/art",
    },
];

export { books, projects, art, hobbys };
