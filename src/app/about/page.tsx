import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Page", //gaakan ngikutin template dari atasnya
  },
  description: "This is About Page",
};

export default function Page() {
  return (
    <>
      <h2>About Page</h2>
    </>
  );
}
