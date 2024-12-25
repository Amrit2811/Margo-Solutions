import React, { useState, useEffect } from 'react';
import { Accelerometer, Gyroscope, Magnetometer } from 'expo-sensors';
import {Text, View, StyleSheet, Button } from 'react-native';

// custom modules
//import { round } from '../utils/sensors_utils';
import { styles } from '../utils/styles';
//import { RealTimeLineChart } from './lineChart';
import { useAccStep } from '../utils/customHooks';

export function StepEventScreen({ navigation }) {
  // Listeners
  const [subscription, setSubscription] = useState(null);
  const [acc, setAcc] = useState({ x: 0, y: 0, z: 0 });
  const [mag, setMag] = useState({ x: 0, y: 0, z: 0 });
  const [gyr, setGyr] = useState({ x: 0, y: 0, z: 0 });

  // Custom Hooks
  const [accStep, accEvent] = useAccStep(acc, mag, gyr);

  // States
  const [stepCount, setStepCount] = useState(0);

  // Constant declarations
  const dt = 100;

  Accelerometer.setUpdateInterval(dt);
  Magnetometer.setUpdateInterval(dt);
  Gyroscope.setUpdateInterval(dt);

  const _subscribe = () => {
    const sensor = {
      acc: Accelerometer.addListener((data) => {
        setAcc(data);
      }),
      mag: Magnetometer.addListener((data) => {
        setMag(data);
      }),
      gyr: Gyroscope.addListener((data) => {
        setGyr(data);
      }),
    };
    setSubscription(sensor);
  };

  const _unsubscribe = () => {
    subscription.acc.remove();
    subscription.mag.remove();
    subscription.gyr.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe;
    return () => {
      Accelerometer.removeAllListeners();
      Magnetometer.removeAllListeners();
      Gyroscope.removeAllListeners();
      _unsubscribe;
    };
  }, [navigation]);

  useEffect(() => {
    if (accEvent) {
      setStepCount((c) => c + 1);
    }
  }, [accStep]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step Acceleration</Text>
      <Text style={styles.text}>{accEvent}</Text>
      <Text style={styles.title}>Step Count</Text>
      <Text style={styles.text}>{stepCount}</Text>
      <View style={styles.buttonContainer}>
      <Button title= "sub" onPress={_subscribe} />
      </View>
    </View>
  );
}
