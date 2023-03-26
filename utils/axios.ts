import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Modal, message } from 'antd';
import { getAccessToken } from '@utils/auth';
import { isWindow } from '@utils/window';

const customAxios = Axios.create({
    baseURL: '/mzti',
    timeout: 10000,
});

const token = getAccessToken();

customAxios.defaults.headers.common['Authorization'] = getAccessToken() ? `Bearer ${token}` : '';

const onRequest = (config: AxiosRequestConfig): any => {
    // console.info(`[request] [${JSON.stringify(config)}]`);
    return config;
};

const onRequestError = (error: AxiosError<any>): Promise<AxiosError> => {
    console.log('onRequestError', error);

    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    // console.info(`[response] [${JSON.stringify(response)}]`);
    return response;
};

/**
 * Http Status Error 정의
 * 400 Bad Request
 * -> 이 응답은 잘못된 문법으로 인하여 서버가 요청하여 이해할 수 없음을 의미.(일반적으로 프론트에서 잘 못 요청했을 확률이 높음.!!)
 * 401 Unauthorized
 * -> 클라이언트가 권한이 없기 때문에 작업을 진행할 수 없는 경우.
 * (api를 요청할 때 토큰을 포함해서 요청하지 않은 경우 혹은
 *  access Token이 만료된 경우 서버에서 401 상태코드를 가진 응답을 주며 해당 경우에는
 *  refresh Token으로 다시 access Token을 요청하거나 다시 로그인하는 동작이 필요합니다.)
 * 403
 * -> 클라이언트는 콘텐츠에 접근할 권리를 가지고 있지 않을 경우.(일반유저 권한을 가진 사용자가 관리자 권한의 기능을 요청했을 경우.)
 * 404
 * -> 경로가 존재하지 않음, 자원이 존재하지 않음 두 가지로 나뉨.
 * 405
 * -> 클라이언트의 요청이 허용되지 않는 메소드인 경우. (get 메소드로 되어있는 api인데 post, put, delete 등 다른 메소드로 요청한 경우.)
 * 500 번대 에러
 * -> 서버에서 확인이 필요한 에러
 */
const onResponseError = async (error: AxiosError<any>) => {
    console.log(`response Error`, error);
    const onError = (data: any) => {
        isWindow()
            ? Modal.error({
                  title: `Error Code: ${data.code}`,
                  content: data.message,
              })
            : console.log({ code: `Error Code: ${data.code}`, message: data.message });
    };
    if (error.response) {
        const { status, data } = error.response;
        switch (true) {
            case status === 400: {
                onError(data);
                break;
            }
            case status === 401: {
                onError(data);

                break;
            }
            case status === 403: {
                onError(data);

                break;
            }
            case status === 404: {
                onError(data);

                break;
            }
            case status >= 500: {
                onError(data);

                break;
            }
            default: {
                onError(data);

                break;
            }
        }
    }
    return Promise.reject(error.response);
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}

export default setupInterceptorsTo(customAxios);
