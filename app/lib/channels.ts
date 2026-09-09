export type Program = {
    title: string;
    startTime: string;
    endTime: string;
};

export type Channel = {
    id: number;
    name: string;
    country: string;
    category: string;
    description: string;
    logo: string;
    streamUrl: string;
    tvgId: string;
};

export const channels: Channel[] = [
    {
        id: 0,
        name: "Canal 13",
        description: "Canal 13",
        country: "Chile",
        category: "Entertainment",
        logo: "/channel0.png",
        streamUrl: "https://redirector.dps.live/hls/13cl/playlist.m3u8",
        tvgId: "Canal.13.de.Chile.cl",
    },
    {
        id: 1,
        name: "T13",
        description: "Canal 13",
        country: "Chile",
        category: "News",
        logo: "/channel1.png",
        streamUrl: "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/t13/t13.smil/playlist.m3u8",
        tvgId: "Tele13.Radio.cl",
    },
    {
        id: 2,
        name: "13 Teleseries",
        description: "Canal 13",
        country: "Chile",
        category: "Entertainment",
        logo: "/channel2.png",
        streamUrl: "https://origin.dpsgo.com/ssai/event/f4TrySe8SoiGF8Lu3EIq1g/master.m3u8",
        tvgId: "",
    },
    {
        id: 3,
        name: "13 Kids",
        description: "Canal 13",
        country: "Chile",
        category: "Kids",
        logo: "/channel3.png",
        streamUrl: "https://origin.dpsgo.com/ssai/event/LhHrVtyeQkKZ-Ye_xEU75g/master.m3u8",
        tvgId: "",
    },
    {
        id: 4,
        name: "TVN",
        description: "TVN",
        country: "Chile",
        category: "Entertainment",
        logo: "/channel4.png",
        streamUrl: "https://iptv2.intersurtv.cl/TVN/index.m3u8",
        tvgId: "Canal.TVN.(Chile).cl",
    },
    {
        id: 5,
        name: "Mega",
        description: "Mega",
        country: "Chile",
        category: "Entertainment",
        logo: "/channel5.png",
        streamUrl: "https://unlimited2-cl-isp.dps.live/mega/mega.smil/playlist.m3u8",
        tvgId: "Canal.Mega.(Chile).cl",
    },
    {
        id: 6,
        name: "TVN 3",
        description: "TVN",
        country: "Chile",
        category: "Entertainment",
        logo: "/channel6.png",
        streamUrl: "https://mdstrm.com/live-stream-playlist/5653641561b4eba30a7e4929.m3u8",
        tvgId: "Canal.TVN3.(Chile).cl",
    },
    {
        id: 7,
        name: "13 Realities",
        description: "Canal 13",
        country: "Chile",
        category: "Entertainment",
        logo: "/channel7.png",
        streamUrl: "https://origin.dpsgo.com/ssai/event/g7_JOM0ORki9SR5RKHe-Kw/master.m3u8",
        tvgId: "13Realities.cl",
    },
    {
        id: 8,
        name: "TV Chile",
        description: "TVN",
        country: "Chile",
        category: "Entertainment",
        logo: "/channel8.png",
        streamUrl: "https://mdstrm.com/live-stream-playlist/533adcc949386ce765657d7c.m3u8",
        tvgId: "TV.Chile.cl",
    },
    {
        id: 9,
        name: "CHV",
        description: "CHV",
        country: "Chile",
        category: "Entertainment",
        logo: "/channel9.png",
        streamUrl: "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chv/chv.smil/playlist.m3u8",
        tvgId: "Canal.Chilevisión.(CHV).cl",
    },
    {
        id: 10,
        name: "13 Cultura",
        description: "Canal 13",
        country: "Chile",
        category: "Entertainment",
        logo: "/channel10.png",
        streamUrl: "https://origin.dpsgo.com/ssai/event/GI-9cp_bT8KcerLpZwkuhw/master.m3u8",
        tvgId: "",
    },
    {
        id: 11,
        name: "24 Horas",
        description: "TVN",
        country: "Chile",
        category: "News",
        logo: "/channel11.png",
        streamUrl: "https://mdstrm.com/live-stream-playlist/689ba606ecfe7915e1f8f741.m3u8",
        tvgId: "Canal.24.Horas.(Chile).cl",
    },
    {
        id: 12,
        name: "UCV",
        description: "UCV",
        country: "Chile",
        category: "Entertainment",
        logo: "/channel12.png",
        streamUrl: "https://unlimited1-cl-isp.dps.live/ucvtv2/ucvtv2.smil/playlist.m3u8",
        tvgId: "Canal.UCV.Televisión.cl",
    },
    {
        id: 20,
        name: "Fox Weather",
        description: "Fox",
        country: "USA",
        category: "News",
        logo: "/channel20.png",
        streamUrl: "https://247wlive.foxweather.com/stream/index.m3u8",
        tvgId: "",
    },
    {
        id: 21,
        name: "Bloomberg",
        description: "Bloomberg",
        country: "USA",
        category: "News",
        logo: "/channel21.png",
        streamUrl: "https://www.bloomberg.com/media-manifest/streams/us.m3u8",
        tvgId: "",
    },
    {
        id: 22,
        name: "El trece",
        description: "El trece",
        country: "Argentina",
        category: "Entertainment",
        logo: "/channel22.png",
        streamUrl: "https://livetrx01.vodgc.net/eltrecetv/index.m3u8",
        tvgId: "Canal.13.de.Argentina.(El.Trece).ar",
    },
];