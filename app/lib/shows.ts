export type Shows = {
    id: number;
    name: string;
    country: string;
    category: string;
    language: string;
    logo: string;
    streamUrl: string;
    tvgId: string;
};

export const shows: Shows[] = [
    {
        id: 7,
        name: "El Chavo",
        country: "Latin America",
        category: "Kids",
        language: "Espanol",
        logo: "/shows/elchavo.png",
        streamUrl: "https://live20.bozztv.com/giatvplayout7/giatv-211465/playlist.m3u8",
        tvgId: "",
    },
    {
        id: 10,
        name: "Mr. Bean",
        country: "Latin America",
        category: "Kids",
        language: "Spanish",
        logo: "/shows/mrbean.png",
        streamUrl: "https://amg00627-amg00627c30-rakuten-es-3990.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanescc-rakutenes/playlist.m3u8",
        tvgId: "",
    },
    {
        id: 11,
        name: "VEVO",
        country: "Latin America",
        category: "Music",
        language: "Spanish",
        logo: "/shows/vevo.png",
        streamUrl: "https://amg00056-amg00056c13-rakuten-es-3246.playouts.now.amagi.tv/playlist.m3u8",
        tvgId: "",
    },
    {
        id: 12,
        name: "Cine Friki",
        country: "Latin America",
        category: "Movies",
        language: "Spanish",
        logo: "/shows/cinefriki.png",
        streamUrl: "https://d2mr4fu91mjx9m.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-rb0tx75ojbc5u/CineFriki_ES.m3u8",
        tvgId: "",
    },
    {
        id: 13,
        name: "Cine Western",
        country: "Latin America",
        category: "Movies",
        language: "Spanish",
        logo: "/shows/cinewestern.png",
        streamUrl: "https://d2nq34q0i1r3la.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-awohw8g217ho8/CineWestern_ES.m3u8",
        tvgId: "",
    },
    {
        id: 14,
        name: "Crimenes Reales",
        country: "Latin America",
        category: "Movies",
        language: "Spanish",
        logo: "/shows/crimenesreales.png",
        streamUrl: "https://amg01796-amg01796c13-rakuten-gb-6739.playouts.now.amagi.tv/playlist.m3u8",
        tvgId: "",
    },
    {
        id: 15,
        name: "BBC Drama",
        country: "Latin America",
        category: "Drama",
        language: "Spanish",
        logo: "/shows/bbcdrama.png",
        streamUrl: "https://amg00793-amg00793c40-rakuten-es-5444.playouts.now.amagi.tv/playlist.m3u8",
        tvgId: "",
    },
];