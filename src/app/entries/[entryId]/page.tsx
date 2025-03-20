export default async function Entry({params}: {params: Promise<{entryId:string}>}) {
    const entryId = (await params).entryId;
  return (
    <div>
      <h1> {entryId}</h1>
    </div>
  );
}