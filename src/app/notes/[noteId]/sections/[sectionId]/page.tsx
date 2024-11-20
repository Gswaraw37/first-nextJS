export default function SectionDetail({
  params,
}: {
  params: {
    noteId: string;
    sectionId: string;
  };
}) {
  return (
    <div>
      <h4>
        Note Detail {params.noteId} Section Detail {params.sectionId}
      </h4>
    </div>
  );
}
