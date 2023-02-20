// Core
import { useQuery } from 'react-query';

// API
import { api } from '../api';

export const useRecentComments =  () => {
    const query = useQuery('comments', api.posts.getComments);
    const { data, isFetched } = query;

    return {
        data: data?.data || [],
        isFetched,
    };
};
