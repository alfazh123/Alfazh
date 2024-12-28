const books = [
    {
        id: "1",
        title: "Laut Bercerita",
        authors: ["Leila S. Chudori"],
        year: 2017,
        description:
            "Sebuah novel yang menceritakan tentang keluarga, sahabat, kekasih yang kehilangan pada kejadian tahun 1998 yang lalu.",
        image_url: "/books/laut-bercerita.jpg",
        link: "",
    },
    {
        id: "2",
        title: "Pulang",
        authors: ["Tere Liye"],
        year: 2015,
        description: "A portrait of a woman with an enigmatic smile.",
        image_url: "/books/pulang.jpg",
        link: "",
    },
    {
        id: "3",
        title: "Padang Bulan",
        authors: ["Andrea Hirata"],
        year: 2015,
        description: "",
        image_url: "/books/padang-bulan.jpg",
        link: "",
    },
];

const projects = [
    {
        title: "PathXplorer",
        year: 2024,
        description: "An Android application for career recomendation.",
        src: "/project/pathxplorer.png",
        href: "https://github.com/PathXplorer-C242-PS289/PathXplorer",
        tag: ["Android", "Kotlin", "Firebase"],
    },
    {
        title: "ACE 2024",
        year: 2024,
        description:
            "An application for Campus Expo event on Qomaruddin boarding school.",
        src: "/project/ace2024.png",
        href: "https://ace2024.vercel.app",
        tag: ["NextJS", "MDX"],
    },
    {
        title: "Redesign KediriKab",
        year: 2023,
        description:
            "Redesign KediriKab website with NextJS, TailwindCSS DaisyUI.",
        src: "/project/kediriweb.png",
        href: "https://github.com/alfazh123/redesign_kedirikab",
        tag: ["NextJS"],
    },
    {
        title: "Tanya Aja",
        year: 2024,
        description: "A website for asking and answering questions when preparing.",
        src: "/project/tanyaaja.png",
        href: "https://github.com/alfazh123/TanyaAja",
        tag: ["NextJS", "TailwindCSS", "PostgreSQL"],
    },
];

const art = [
    {
        image: '/art-photo/art4.jpg',
        date: '2021-10-10',
        device: 'Samsung Galaxy A12',
    },
    {
        image: '/art-photo/art6.jpg',
        date: '2021-10-10',
        device: 'Samsung Galaxy A12',
    },
    {
        image: '/art-photo/art9.jpg',
        date: '2021-10-10',
        device: 'Samsung Galaxy A12',
    },
    {
        image: '/art-photo/art10.jpg',
        date: '2021-10-10',
        device: 'Samsung Galaxy A12',
    },
    {
        image: '/art-photo/art11.jpeg',
        date: '2021-10-10',
        device: 'Samsung Galaxy A12',
    },
    {
        image: '/art-photo/art12.jpeg',
        device: 'Samsung Galaxy A12',
        date: '2021-10-10',
    },
    {
        image: '/art-photo/art13.jpeg',
        device: 'Samsung Galaxy A12',
        date: '2021-10-10',
    },
    {
        image: '/art-photo/art14.jpeg',
        device: 'Samsung Galaxy A12',
        date: '2021-10-10',
    },
    {
        image: '/art-photo/art15.jpeg',
        device: 'Samsung Galaxy A12',
        date: '2021-10-10', 
    }
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
