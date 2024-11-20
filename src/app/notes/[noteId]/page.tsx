import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    noteId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Note Detail ${params.noteId}`,
    description: `This is Note Detail ${params.noteId}`,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NoteDetail({ params, searchParams }: any) {
  console.log(searchParams);
  if (parseInt(params.noteId) > 100) {
    notFound();
  }

  return (
    <div>
      <h3>Note Detail {params.noteId}</h3>
    </div>
  );
}
