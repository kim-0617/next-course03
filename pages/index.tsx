import React from "react";
import SEO from "@/components/SEO";

interface Posts {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface Props {
  posts: Posts[];
}

function Home(props: Props) {
  return (
    <>
      <SEO
        title="Home"
        description="this is index page"
        keyword="Home nextjs"
      />
      <h1>Welcome To My Blog</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20, // 20초 후에 다시 확인
  };
};

export default Home;
