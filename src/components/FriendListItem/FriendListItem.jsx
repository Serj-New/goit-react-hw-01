import clsx from 'clsx'
import css from './FriendListItem.module.css'

export default function FriendListItem({
    friend: {
        avatar,
        name,
        isOnline
    },
}) {
    const onlineClassName = clsx(css.friendStatus, isOnline ? css.isOnline : css.isOffline);

    return (
        <div className={css.friendCard}>
            <img src={avatar} alt={name + "'s avatar"} width="88" />
            <p className={css.friendName}>{name}</p>
            <p className={onlineClassName}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}