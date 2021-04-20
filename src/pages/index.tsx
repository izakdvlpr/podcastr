import { GetStaticProps } from 'next';

interface Episodes {
  id: string;
  title: string;
  members: string;
  published_at: string;
  thumbnail: string;
  description: string;
  file: {
    url: string;
    type: string;
    duration: number;
  };
}

interface HomeProps {
  episodes: Episodes[];
}

export default function Home({ episodes }: HomeProps) {
  return <div>{JSON.stringify(episodes)}</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, // 8 horas
  };
};
