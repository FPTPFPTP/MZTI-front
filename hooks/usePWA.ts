import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { device } from '@utils/window';
interface BeforeInstallPromptEvent extends Event {
    prompt(): Promise<void>;
}

interface IusePWA {
    isInstalled: boolean;
    isOffline: boolean;
    canInstall: boolean;
    showInstallPrompt(): Promise<void>;
}

const usePWA = (): IusePWA => {
    const [canInstall, setCanInstall] = useState<boolean>(false);
    const [isInstalled, setInstalled] = useState<boolean>(false);
    const [isOffline, setOffline] = useState<boolean>(false);
    const deferredPrompt = useRef() as MutableRefObject<BeforeInstallPromptEvent | null>;

    const handleInstallEvent = useCallback(() => setInstalled(true), []);

    const handleBeforePromptEvent = useCallback((event: Event) => {
        event.preventDefault();
        if (!device()) {
            setCanInstall(false);
        } else {
            setCanInstall(true);
        }

        deferredPrompt.current = event as BeforeInstallPromptEvent;
    }, []);

    const handleOfflineEvent = useCallback(
        (offline: boolean) => () => {
            setOffline(offline);
        },
        [],
    );

    const showInstallPrompt = useCallback(async () => {
        if (deferredPrompt.current) {
            deferredPrompt.current.prompt();
        }
    }, []);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', handleBeforePromptEvent);
        return () => window.removeEventListener('beforeinstallprompt', handleBeforePromptEvent);
    }, [handleBeforePromptEvent]);

    useEffect(() => {
        window.addEventListener('appinstalled', handleInstallEvent);
        return () => window.removeEventListener('appinstalled', handleInstallEvent);
    }, [handleInstallEvent]);

    useEffect(() => {
        if (navigator) {
            setOffline(!navigator.onLine);
        }

        window.addEventListener('online', handleOfflineEvent(false));
        window.addEventListener('offline', handleOfflineEvent(true));
        return () => {
            window.removeEventListener('online', handleOfflineEvent(false));
            window.removeEventListener('offline', handleOfflineEvent(true));
        };
    }, [handleOfflineEvent]);

    return {
        isInstalled,
        isOffline,
        canInstall,
        showInstallPrompt,
    };
};

export default usePWA;
