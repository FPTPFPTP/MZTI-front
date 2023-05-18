import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import { postUserPushToken } from '@/apis/appPush';

export default function Firebase() {
    const onMessageFCM = async () => {
        // 브라우저에 알림 권한을 요청합니다.
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') return;

        const firebaseApp = initializeApp({
            apiKey: process.env.NEXT_PUBLIC_API_KEY,
            authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
            projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
            storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
            messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_ID,
            appId: process.env.NEXT_PUBLIC_APP_ID,
            measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
        });

        const messaging = getMessaging(firebaseApp);

        getToken(messaging, {
            vapidKey: 'BPlZnWE5D2QK8YRTzFmkjsLeoacE-c7Tt2npGuXIs8QYV9NvH58yVzVF0NeTXO6p8SDSvE6igf__RGXGmSfCAmM',
        })
            .then((currentToken) => {
                if (currentToken) {
                    console.log('푸시 토큰 : ', currentToken);
                    postUserPushToken({ token: currentToken }).then((res) => console.log('APP PUSH 토큰 서버에 전송', res && res.code));
                } else {
                    console.log('No registration token available. Request permission to generate one.');
                }
            })
            .catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });

        // 메세지가 수신되면 역시 콘솔에 출력합니다.
        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
        });
    };

    useEffect(() => {
        onMessageFCM();
    }, []);

    return null;
}
