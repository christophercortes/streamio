export type Channel = {
    id: number;
    name: string;
    description: string;
    logo: string;
    streamUrl: string;
};

export const channels: Channel[] = [
    {
        id: 0,
        name: "Canal 13",
        description: "Canal en vivo",
        logo: "/channel0.png",
        streamUrl: "https://dai.google.com/linear/hls/pa/event/nthipJzGQY-A-N0t6xCZhA/stream/677f52c1-5308-40c4-8f04-d50e3e14386b:SCL2/master.m3u8",
    },
    {
        id: 1,
        name: "13 Entretencion",
        description: "Canal en vivo",
        logo: "/channel1.png",
        streamUrl: "https://origin.dpsgo.com/ssai/event/BBp0VeP6QtOOlH8nu3bWTg/master.m3u8",
    },
    {
        id: 2,
        name: "13 Teleseries",
        description: "Canal en vivo",
        logo: "/channel2.png",
        streamUrl: "https://origin.dpsgo.com/ssai/event/f4TrySe8SoiGF8Lu3EIq1g/master.m3u8",
    },
    {
        id: 3,
        name: "13 Kids",
        description: "Canal en vivo",
        logo: "/channel3.png",
        streamUrl: "https://dai.google.com/linear/hls/pa/event/LhHrVtyeQkKZ-Ye_xEU75g/stream/14a8fad7-7fb0-4614-9d40-bf366c3a571f:SCL2/master.m3u8",
    },
    {
        id: 10,
        name: "13 Prime",
        description: "Canal en vivo",
        logo: "/channel10.png",
        streamUrl: "https://dai.google.com/linear/hls/pa/event/p4mmBxEzSmKAxY1GusOHrw/stream/1f317501-1dce-4d77-a258-5a4f1e79ec07:SCL2/master.m3u8",
    },
    {
        id: 11,
        name: "24 Horas",
        description: "Canal en vivo",
        logo: "/channel11.png",
        streamUrl: "https://mdstrm.com/live-stream-playlist/689ba606ecfe7915e1f8f741.m3u8",
    },
];