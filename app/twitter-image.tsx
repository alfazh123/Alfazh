import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ahmd Alfazh";
export const size = {
    width: 1200,
    height: 630,
};


export const contentType = "image/png";

function capitalizeFirstLetter(string: string) {
    return string.split('').map((char, index) =>
        index === 0 ? char.toUpperCase() : char).join('')
}

export default async function Image() {


    return new ImageResponse(
        (
            <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
            >
                <img src="https://alfazh.vercel.app/bg-og.png" alt="logo" width={1300} height={630} className="" />
                <h3 tw="absolute z-10 w-[650px] bottom-72 text-white left-24 text-6xl">Ahmd Alfazh</h3>
                <p tw="absolute z-10 bottom-52 w-[450px] left-24 text-white">A Portfolio Website by Alfazh, show some of my Pprojects, Art, and Blog.</p>
            </div>
        ),
        {
            ...size,
        }
    );
}
