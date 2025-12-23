import Marquee from 'react-fast-marquee';

type Image = {
  id: number;
  url: string;
  name: string;
};

export const RunningLine = ({ images }: { images: Image[] | null }) => {
  const options = {
    speed: 50,
    gradient: false,
    pauseOnHover: true,
  };

  if (!images?.length) return null;

  return (
    <div className="flex h-[160px] items-center justify-center border-y-1 border-[#8F8D81]">
      <Marquee {...options}>
        {images.map(({ id, url, name }) => (
          <div key={id} className="mx-[45px]">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
              alt={name || ''}
              className="max-h-[60px]"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
