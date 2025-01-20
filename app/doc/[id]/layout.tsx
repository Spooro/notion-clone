import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";

type LayoutParams = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};

export default async function Layout({ children, params }: LayoutParams) {
  await auth.protect();
  const { id } = await params;

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}
