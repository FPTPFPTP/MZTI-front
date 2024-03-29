importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const config = {
    apiKey: 'AIzaSyCvjjhyHXfNJazxCiskCicW6mc2YEAauQQ',
    authDomain: 'mzti-a6373.firebaseapp.com',
    projectId: 'mzti-a6373',
    storageBucket: 'mzti-a6373.appspot.com',
    messagingSenderId: '324938800012',
    appId: '1:324938800012:web:b5bce87dc608e2233014a9',
    measurementId: 'G-TS7NV20XG1',
};

// Initialize Firebase
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    // console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };
    const notificationPostId = payload.data.postId;
    // console.log({ notificationPostId });
    self.addEventListener('notificationclick', () => {
        self.clients.openWindow(`https://www.mzti.kr/boardDetail/${notificationPostId}`);
    });

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
