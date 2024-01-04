import * as SecureStore from 'expo-secure-store';

export async function setSecureStore(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getSecureStore(key) {
  const result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert('No values stored under that key.');
  }
}
