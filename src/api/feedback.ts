import axios from "../utils/axios";

export const sendFeedbackRequest = async (values: {}) => {
    return await axios({
        method: 'post',
        url: '/feedback/request',
        data: values
    });
};