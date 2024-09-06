import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Blog Ahmd Alfazh";
export const size = {
    width: 1200,
    height: 630,
};


export const contentType = "image/png";

function capitalizeFirstLetter(string: string) {
    return string.split('').map((char, index) =>
        index === 0 ? char.toUpperCase() : char).join('')
}

export default async function Image({
    params
} : {
    params: {
        slug: string;
    };
}) {
    const titleWord = params.slug.split('-');
    const Title = titleWord.map((str, id) => {
        return capitalizeFirstLetter(str);
    }).join(' ');


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
                <img src="https://alfazh.vercel.app/bg-og.png" alt="og-blog" width={1300} height={630} className="" />
                <h3 tw="absolute z-10 w-[670px] bottom-72 text-white left-24 text-6xl">{Title}</h3>
                <p tw="absolute z-10 bottom-62 left-24 text-white">Blog Written by Alfazh</p>
            </div>
        ),
        {
            ...size,
        }
    );
}
