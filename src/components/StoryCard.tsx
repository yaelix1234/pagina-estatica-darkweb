interface StoryCardProps {
  image: string;
  title: string;
  description: string;
}

function StoryCard({ image, title, description }: StoryCardProps) {

    return (

        <article className="story-card">

            <img
                src={image}
                alt={title}
            />

            <h2>
                {title}
            </h2>

            <p>
                {description}
            </p>

            <button>
                Leer historia
            </button>

        </article>

    );

}

export default StoryCard;