import React from 'react';
import { SkeletonItem } from './styled';

const FeedSkeleton = () => {
    return (
        <li css={SkeletonItem}>
            <div className="skeleton-wrap">
                <div className="skeleton-img" />

                <div className="skeleton-info">
                    <p className="skeleton-name" />
                    <p className="skeleton-email" />
                </div>
            </div>

            <div>
                <p className="skeleton-content" />
            </div>
        </li>
    );
};

export default FeedSkeleton;
