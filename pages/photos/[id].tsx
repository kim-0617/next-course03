import Link from "next/link";
import { GetStaticPropsContext } from "next/types";

interface Photos {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

interface Props {
  photo: Photos;
}

function Detail({ photo }: Props) {
  const { title, url } = photo;
  return (
    <>
      <div>
        <img src={url} alt={title} />
        <h2>{title}</h2>
      </div>

      <Link href="/photos">go Back</Link>
    </>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${context?.params?.id}`
  );
  const photo = await res.json();

  return {
    props: {
      photo,
    },
    revalidate: 20, // 20초 후에 다시 확인
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();

  const ids = photos.map((photo: Photos) => photo.id);
  const paths = ids.map((id: number) => ({
    params: { id: id.toString() },
  }));
  return {
    paths: [...paths],
    fallback: false,
  };
};

export default Detail;
