import ProjectCard from '@/components/project-card';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="h-8" />
      <p className="text-center">بسم الله الرحمن الرحيم</p>
      <div className="h-2" />
      <p className="text-center text-xl" dir="rtl">
        "اِنَّ الْاَبْرَارَ لَفٖي نَعٖيمٍ"
      </p>
      <div className="h-12" />
      <fieldset className="border border-foreground p-4">
        <legend className="px-2 font-black">
          <h1 className="text-xl">Amel-Tech Nedir?</h1>
        </legend>
        <section className="space-y-4 hyphens-auto">
          <p>
            Müslüman bilim insanları, mühendisler ve teknoloji uzmanları için bir araya geldiğimiz,
            bilgi ve deneyimlerimizi paylaştığımız, fikirlerimizi ve projelerimizi geliştirdiğimiz
            bir topluluktur.
          </p>
          <p>
            Amacımız, Allah rızası için Müslümanlara ve tüm insanlığa faydalı olacak ürünler ve
            projeler geliştirmektir. Topluluğumuzda Müslümanların ihtiyaçlarına öncelik
            verilmektedir.
          </p>
          <p>
            Projelerimizde yardıma ihtiyaç duyan proje sahipleri ile topluluk üyelerimizi bir araya
            getiriyor, bilgi ve becerilerimizi paylaşarak birlikte çalışıyoruz.
          </p>
          <p>
            Siz de bu değerli topluluğa katılarak bilginizi paylaşabilir, projelere katkıda
            bulunabilir veya kendi projeniz için destek alabilirsiniz.
          </p>
          <div className="h-2" />
          <p>
            <Link
              href="https://kommunity.com/amel-tech/questions/212ab5a8-a4b3-4cf7-87c9-32ff020b0038"
              className="font-black underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              -{'>'} Katkıda Bulunun
            </Link>
          </p>
          <p>
            <Link href="/proje-talep-edin" className="font-black underline">
              -{'>'} Proje Talep Edin
            </Link>
          </p>
          <p>
            <Link href="/hakkimizda" className="font-black underline">
              -{'>'} Hakkımızda
            </Link>
          </p>
        </section>
      </fieldset>

      <div className="h-12" />

      <fieldset className="border border-foreground p-4">
        <legend className="px-2 font-black">
          <h1 className="text-xl">Acil Çağrılar</h1>
        </legend>

        <section className="space-y-4 hyphens-auto">
          <p>Aşağıdaki pozisyonlarda - aşağıdaki sebeplerle öncelikli yardıma ihtiyacımız var:</p>

          <ul className="list-disc list-inside">
            <li>Proje Yöneticisi - Backlog yönetimi</li>
            <li>Grafik Tasarımcı - Kurumsal kimlik</li>
            <li>UI/UX Tasarımcı - Web uygulamaları</li>
            <li>Hukuk Danışmanı - Hukukî destek</li>
            <li>Topluluk Yöneticisi - Topluluk iletişimi</li>
          </ul>
        </section>
      </fieldset>

      <div className="h-12" />

      <fieldset className="border border-b-0 border-foreground p-4">
        <legend className="px-2 font-black">
          <h1 className="text-xl">Öne Çıkan Projeler</h1>
        </legend>
      </fieldset>

      <section className="flex flex-wrap gap-4">
        <ProjectCard
          title="Online Eğitim Sistemi (LMS)"
          description="Klasik medrese usulüyle online dersler verilmesini, mütalaa ve münazaraları kolaylaştırmayı ve ilim ehlinin ders huzurunu arttırmayı amaçlayan bir projedir."
          url="/projeler/online-egitim-sistemi"
          owner="Hadis ve Siyer Araştırmaları"
          technologies={[
            'Next.js',
            'Axum',
            'React Native',
            'WebRTC',
            'WebAssembly',
            'WebGL',
            'PostgreSQL',
            'TypeScript',
            'Rust',
            'Shadcn UI',
          ]}
          progress={2}
        />

        <ProjectCard
          title="Crystallography"
          description="Dünya'da hızla ilerleyen hesaplamalı kristalografi çalışmalarına katılmayı ve ilgili yazılımların kullanıcı deneyimini arttırmayı amaçlayan bir projedir."
          url="/projeler/crystallography"
          owner="Amel-Tech / Hesaplamalı Bilim Grubu"
          technologies={[
            'Crystal Geometry',
            'CCTBX',
            'Supercomputers',
            'CUDA',
            'C/C++',
            'Rust',
            'Python',
            'TypeScript',
            'WebAssembly',
          ]}
          progress={1}
        />
      </section>

      <div className="h-12" />
    </main>
  );
}
