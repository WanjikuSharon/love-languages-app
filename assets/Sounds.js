import { Platform } from 'react-native';

// Temporarily disable sounds to avoid expo-av deprecation issues
// Can be updated to expo-audio later
const _enabled = false; // Disable for now

export default {
  buttonPress: null,
  completion: null,

  async loadAsync() {
    // No-op for now
    console.log('Sounds loading disabled (expo-av deprecated)');
    return Promise.resolve();
  },

  async playEffectAsync(sound) {
    // No-op for now
    console.log('Sound playback disabled (expo-av deprecated)');
    return Promise.resolve();
  },
};
