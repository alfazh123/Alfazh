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
                tw={`bg-[#f8f3e6] text-center flex flex-col justify-center border-solid border-4 border border-slate-600 pl-32 w-full h-full`}
            >
                <h1 tw="text-6xl font-bold">Ahmd Alfazh</h1>
                <p tw="text-xl">Portofolio Website by Alfazh</p>
            </div>
        ),
        {
            ...size,
        }
    );
}
