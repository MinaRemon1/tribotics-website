import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import TeamBody from "@/components/global/TeamBody";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("team");

  return <TeamBody page={page} />

}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("team");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
