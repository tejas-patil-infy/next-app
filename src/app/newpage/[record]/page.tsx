export default function CategoryPage({
  params,
}: {
  params: { record: string };
}) {
  return (
    <div className='m-10'>
      <h1 className="text-2xl font-bold mb-4">
        Record - {params.record}
      </h1>
    </div>
  );
}