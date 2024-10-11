import clsx from 'clsx';
import Link from 'next/link';
import { type ReactNode } from 'react';
export default function ProjectCard({
  title,
  description,
  url,
  owner,
  technologies,
  progress,
}: {
  title: string;
  description: ReactNode;
  url: string;
  owner: string;
  technologies: string[];
  progress: number;
}) {
  return (
    <fieldset className="border border-foreground p-4 flex-1 min-w-[250px]">
      <legend className="px-2 font-black">{title}</legend>
      <p>{description}</p>
      <div className="h-2" />
      <p>
        <Link
          href={{
            pathname: url,
          }}
          className="font-black underline"
        >
          -{'>'} Proje Detayı
        </Link>
      </p>
      <div className="h-8" />
      <p className="text-sm">Proje Sahibi: {owner}</p>
      <div className="h-2" />
      <div className="flex flex-wrap gap-2 text-sm [&>span]:border [&>span]:border-dashed [&>span]:px-1 [&>span]:border-foreground">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <div className="h-4" />
      <p className="text-xs mb-1">İlerleme:</p>
      <div className="relative self-end">
        <div
          className={clsx(
            'bg-foreground h-2',
            "before:content-[''] before:absolute before:w-full before:border",
            'before:border-dashed before:border-foreground before:h-full',
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </fieldset>
  );
}
