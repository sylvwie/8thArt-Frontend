import { Link } from "react-router-dom";

type FeaturedStoriesCardProps = {
    story: FeaturedStoriesShowcase;
    index: number;
}

export type FeaturedStoriesShowcase = {
    tag: string;
    articleTitle: string;
    gameCoverImage: string;
}

export function FeaturedStoriesCard({ story, index }: FeaturedStoriesCardProps) {
    return (
        <Link
            to={`/featured-story-${index + 1}`}
            className="featuredstoriescard-wrapper"
        >
            <div className="featuredstoriescard-cover-container">
                <button className="featuredstoriescard-tag">{story.tag}</button>
                <img className="featuredstoriescard-cover" src={story.gameCoverImage} alt="" />
            </div>
            <div className="featuredstoriescard-info-container">
                <span className="featuredstoriescard-article-title">{story.articleTitle}</span>
            </div>
        </Link>
    );
}