export default async function Crag ({params}: {params: Promise<{cragId:string}>}) {
    const cragId = (await params).cragId;
    return (
        <div>
            <h1> {cragId}</h1>
        </div>
    );
}