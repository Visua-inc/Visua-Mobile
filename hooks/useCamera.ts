import { useCameraPermissions } from 'expo-camera';
import { useEffect, useState } from 'react';

export function useCameraAccess() {
  const [permission, requestPermission] = useCameraPermissions();
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    if (permission?.granted) {
      setHasPermission(true);
    }
  }, [permission]);

  return { hasPermission, requestPermission };
}