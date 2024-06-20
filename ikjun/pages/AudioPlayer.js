import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const AudioPlayer = ({ source, onSoundRef }) => {
  const [sound, setSound] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const intervalRef = useRef(null);

  const playPauseHandler = async () => {
    if (sound) {
      if (playing) {
        await sound.pauseAsync();
        clearInterval(intervalRef.current);
      } else {
        await sound.playAsync();
        intervalRef.current = setInterval(async () => {
          const status = await sound.getStatusAsync();
          if (status.isLoaded) {
            setPosition(status.positionMillis);
          }
        }, 1000);
      }
      setPlaying(!playing);
    }
  };

  const stopHandler = async () => {
    if (sound) {
      await sound.stopAsync();
      clearInterval(intervalRef.current);
      setPlaying(false);
      setPosition(0);
    }
  };

  const onPlaybackStatusUpdate = status => {
    if (status.isLoaded) {
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
    }
  };

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(source, {}, onPlaybackStatusUpdate);
      setSound(sound);
      if (onSoundRef) {
        onSoundRef(sound);
      }
    };

    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [source]);

  return (
    <View style={styles.audioPlayerContainer}>
      <TouchableOpacity onPress={playPauseHandler}>
        <Ionicons name={playing ? "pause" : "play"} size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={stopHandler}>
        <Ionicons name="stop" size={32} color="black" />
      </TouchableOpacity>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onSlidingComplete={async value => {
          if (sound) {
            await sound.setPositionAsync(value);
          }
        }}
      />
    </View>
  );
};

export default AudioPlayer;