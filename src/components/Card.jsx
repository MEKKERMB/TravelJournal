const Card = (props) => {
  return (
    <article className="flex">
      <figure className="flex-[33%]">
        <img
          className="aspect-square object-cover"
          src={props.image}
          alt="Image"
        />
      </figure>
      <section className="flex-[66%] p-5">
        <div className="flex items-center gap-3">
          <p className="font-light uppercase tracking-[0.2em] text-gray-800">
            {props.location}
          </p>
          <a
            className="text-neutral-400 underline underline-offset-4"
            href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <header className="mt-2">
          <h1 className="text-4xl font-bold text-gray-800">{props.title}</h1>
        </header>
        <p className="mt-6 font-bold text-gray-800">{props.date}</p>
        <p className="mt-2">{props.description}</p>
      </section>
    </article>
  );
};

export default Card;
