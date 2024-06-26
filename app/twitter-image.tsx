import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ahmd Alfazh";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                tw={`bg-[#F0F0F0] text-center justify-center items-center flex flex-col mx-auto w-full h-full`}
            >
                <h1 tw="text-6xl font-bold">Ahmd Alfazh</h1>
                <p tw="text-3xl bg-[#3C7BC0] text-white px-3 py-2 rounded-md">Front-end Developer</p>
                <div tw="bg-[#3C7BC0] h-2 w-72 mb-4"></div>
                <div tw="bg-[#3C7BC0] h-2 w-64 mb-4"></div>
                <div tw="bg-[#3C7BC0] h-2 w-56 mb-4"></div>
            </div>
        ),
        {
            ...size,
        }
    );
}
