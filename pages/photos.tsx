import React from "react";
import SEO from "@/components/SEO";
import Image from "next/image";
import { useRouter } from "next/router";

interface Photos {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

interface Props {
  photos: Photos[];
}

function Photos({ photos }: Props) {
  const router = useRouter();
  const onClick = (id: number) => {
    router.push(`/photos/${id}`);
  };
  return (
    <>
      <SEO
        title="Photos"
        description="this is photos page"
        keyword="photos nextjs"
      />
      <h1>My Photos</h1>
      <div className="wrap">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="photos"
            onClick={() => {
              onClick(photo.id);
            }}
          >
            <img src={photo.thumbnailUrl} alt={photo.title} />
            {/* <Image
              src={photo.thumbnailUrl}
              width={150}
              height={150}
              alt={photo.thumbnailUrl}
            /> */}
            <p>{photo.title}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        h1 {
          margin: 20px;
        }
        .wrap {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin: 20px;
        }

        .photos {
          width: 32%;
          margin-right: 2%;
          cursor: pointer;
        }

        .photos:nth-child(3n) {
          margin-right: 0;
        }

        .photos img {
          display: block;
          margin: 10px auto;
        }
      `}</style>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();

  return {
    props: {
      photos,
    },
    revalidate: 20, // 20초 후에 다시 확인
  };
};

export default Photos;
