import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats: { followers, views, likes }}) {
    return (
        <div className={css.profileCard}>
            <div className={css.descr}>
                <div className={css.avatarWrap}>
                    <img
                    src={image}
                    alt="User avatar"
                    className={css.avatar}
                    />
                </div>
                <p className={css.userName}>{name}</p>
                <p className={css.userTag}>@{tag}</p>
                <p className={css.userLocation}>{location}</p>
            </div>

            <ul className={css.infoList}>
                <li className={css.infoItem}>
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li className={css.infoItem}>
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li className={css.infoItem}>
                    <span>Likes</span>
                    <span>{likes}</span>
                </li>
            </ul>
        </div>
    );
}