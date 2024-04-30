function Photo({ src, key, alt } : { src: string, key: string, alt: string}) {
    return (
    <img src={src} key={key} alt={alt} width="300" height="auto" />
    );
}

export default Photo;
