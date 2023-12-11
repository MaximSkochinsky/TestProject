import { MouseEventHandler } from "react";

// eslint-disable-next-line @typescript-eslint/no-redeclare
const TagsList = ({ tags, screen }: {tags: any, screen: any}) => {
    console.log(typeof(tags), typeof(screen))
    return (
        <div className="tags-container">
            <div className="tags-container__tags">
                <span>All</span>

                {tags.length && tags.map(({ tag, active }: {tag: any, active: any}) => (<span key={tag + '_1'} className={active && ('active')}>{tag}</span>))}

            </div>
            <div className="icon" onClick={screen}>
                <svg>
                    <use xlinkHref="#setup-icon-48x48"></use>
                    <title id="title">Setup tags</title>
                </svg>
            </div>
        </div>
    )
};

export default TagsList;