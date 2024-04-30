export default function TitleAndDescription({ title, description }: { title: string, description: string }) {
    return (
        <div>
            <h1>{title}</h1>
            <p className='fs-5'>{description}</p>
        </div>
    );
}
