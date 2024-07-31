import * as request from '~/utils/request';
export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            //nó encode sẵn r , cấu hình trùng với kiểu dữ liệu json
            params: {
                q,
                type: 'less',
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
