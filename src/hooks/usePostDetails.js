// Core
import { useQuery } from 'react-query';

// API
import { api } from '../api/api';

export const usePostDetails = (postHash) => {
    const { data, isFetched } = useQuery(['PostDetails', postHash], () => api.posts.getPostById(postHash), { retry: false });

    return {
        data: data?.data || {},
        isFetched,
    };
};
