import clsx from 'clsx';
import type { Route } from 'next';
import Link from 'next/link';

export default function Menu({
  hidden,
  setHidden,
}: { hidden: boolean; setHidden: (hidden: boolean) => void }) {
  return (
    <fieldset
      className={clsx(
        'absolute p-4 z-50 top-17 right-0 w-64 bg-blue-200 dark:bg-blue-900 border border-foreground',
        {
          hidden,
        },
      )}
    >
      <legend className="px-2 font-black">
        <p>Menü</p>
      </legend>
      <nav>
        <ul
          className={clsx(
            '[&>li>a]:border-b [&>li>a]:border-transparent [&>li>a:hover]:border-b [&>li>a]:p-1',
            '[&>li>a:hover]:border-dashed [&>li>a:hover]:border-foreground [&>li>a]:block',
          )}
        >
          <li>
            <Link href={'/' as Route} onClick={() => setHidden(true)}>
              Anasayfa
            </Link>
          </li>
          <li>
            <Link href="/hakkimizda" onClick={() => setHidden(true)}>
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link href="/projeler" onClick={() => setHidden(true)}>
              Projeler
            </Link>
          </li>
          <li>
            <Link
              href="https://kommunity.com/amel-tech/questions/212ab5a8-a4b3-4cf7-87c9-32ff020b0038"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setHidden(true)}
            >
              Katkıda Bulunun
            </Link>
          </li>
          <li>
            <Link href="/proje-talep-edin" onClick={() => setHidden(true)}>
              Proje Talep Edin
            </Link>
          </li>
        </ul>
      </nav>
    </fieldset>
  );
}
