import { Hero } from '@/app/ui/components/MovieDetails/Hero';

interface Page {
  params: {
    id: string;
  };
}
export default function page({ params }: Page): JSX.Element {
  const movieId: string = params.id;
  return <Hero movieId={movieId} />;
}
