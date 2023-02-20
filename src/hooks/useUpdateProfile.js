// Core
import { useMutation } from 'react-query';

// API
import { api } from '../api';

export const useUpdateProfile =  () => {
    const mutationFn = useMutation((profileInfo) => {
        return api.profile.updateProfile(profileInfo);
    });

    return mutationFn;
};
