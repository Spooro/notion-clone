"use client";

import Document from "@/components/Document";

type PageParams = {
  params: Promise<{ id: string }>;
};

export default async function DocumentPage({ params }: PageParams) {
  const { id } = await params;

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Document id={id} />
    </div>
  );
}
