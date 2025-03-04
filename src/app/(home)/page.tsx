"use client";

import { useQuery } from "convex/react";
import Link from "next/link";
import { Navbar } from "./navbar";
import TemplatesGallery from "./templates-gallery";
import { api } from "../../../convex/_generated/api";

const Home = () => {
  const documents = useQuery(api.documents.get);
  if (documents == undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen  ">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white p-4">
        <Navbar />
      </div>

      <div className="mt-20">
        <TemplatesGallery />
        {documents?.map((document) => (
          <div key={document._id}>
            <Link href={`/documents/${document._id}`}>{document.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
