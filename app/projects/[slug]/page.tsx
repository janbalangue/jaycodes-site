import type { ReactElement } from 'react';

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}): Promise<ReactElement> {
  const id = params.slug;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
      <h1 className="text-4xl font-bold">Project Page: {id}</h1>
      <p className="text-lg">This is a dynamic project page.</p>
    </div>
  );
}
