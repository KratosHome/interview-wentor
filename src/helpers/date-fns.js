import { formatDistance } from 'date-fns';

export const formatDate = (created) => {
    const createdTime = formatDistance(
        new Date(created ?? null),
        new Date(),
        {
            addSuffix:      true,
            includeSeconds: true,
        },
    );

    return createdTime;
};
