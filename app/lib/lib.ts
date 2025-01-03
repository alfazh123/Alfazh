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
        href: "pathxplorer",
        tag: ["Android", "Kotlin", "Firebase"],
    },
    {
        title: "ACE 2024",
        year: 2024,
        description:
            "An application for Campus Expo event on Qomaruddin boarding school.",
        src: "/project/ace2024.png",
        href: "ace-2024",
        tag: ["NextJS", "MDX"],
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

const experiences = [
    {
        title: "Android Developer",
        company: "Bangkit Academy 2024 Batch 2",
        year: "September 2024 - January 2025",
        works: [
            "Becoming Peer tutor for student group Mobile Development",
            "Build PathXplorer an Android app for student who confusing when choosing major or career, this app is integrated with Machine Learning Model on device using LiteRT.",
            "Become 1.000 Most Active Students in the ILT session (Tech and Soft Skills) and complete all mandatory classes 1 month before the deadline."
        ]
    }
]

export { books, projects, art, hobbys , experiences};
