type TitleCardProps = {
  title1: string;
  title2: string;
  description: string;
};

export function TitleCard({ title1, title2, description }: TitleCardProps) {
  return (
    <div className="flex flex-col gap-6 mt-16">
      <h1 className="text-7xl md:text-9xl font-bold text-left text-black dark:text-white">
        {title1}
        <br />
        {title2}
      </h1>
      <p className="text-xl md:text-2xl text-left text-black dark:text-white">
        {description}
      </p>
    </div>
  );
}
