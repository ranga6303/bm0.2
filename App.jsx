import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  /* === Minimal, deterministic animation === */
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Attendance System</Text>
      </View>

      <Animated.View style={{opacity: fade}}>

        {/* STUDENT CARD */}
        <View style={styles.card}>
          <Image
            source={require('./assets/user.png')}
            style={styles.avatar}
          />

          <View style={styles.studentInfo}>
            <Text style={styles.name}>Uzumaki Naruto</Text>
            <Text style={styles.meta}>Roll No: 23CS1045</Text>
            <Text style={styles.meta}>Programme: B.Tech (CSE)</Text>
          </View>
        </View>

        {/* METRICS */}
        <View style={styles.metricsRow}>
          <Metric label="Overall Attendance" value="96%" />
          <Metric label="Current Month" value="94%" />
          <Metric label="Today" value="Present" />
        </View>

        {/* ACTIONS */}
        <View style={styles.actions}>
          <Action
            icon="how-to-reg"
            label="Mark Attendance"
          />
          <Action
            icon="assessment"
            label="Attendance Report"
          />
          <Action
            icon="settings"
            label="Account Settings"
          />
        </View>

      </Animated.View>
    </View>
  );
}

/* === PURE COMPONENTS (NO HOOKS) === */

const Metric = ({label, value}) => (
  <View style={styles.metricBox}>
    <Text style={styles.metricValue}>{value}</Text>
    <Text style={styles.metricLabel}>{label}</Text>
  </View>
);

const Action = ({icon, label}) => (
  <TouchableOpacity style={styles.actionItem} activeOpacity={0.6}>
    <MaterialIcons name={icon} size={24} color="#1E3A8A" />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

/* === DESIGN SYSTEM === */

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FAFB', // neutral academic background
  },

  header: {
    height: 68,
    paddingTop: 22,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    elevation: 2,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },

  card: {
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 16,
    elevation: 1,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },

  studentInfo: {
    marginLeft: 16,
    justifyContent: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  meta: {
    marginTop: 2,
    fontSize: 13,
    color: '#4B5563',
  },

  metricsRow: {
    marginTop: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  metricBox: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    elevation: 1,
  },

  metricValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E3A8A',
  },

  metricLabel: {
    marginTop: 4,
    fontSize: 11,
    textAlign: 'center',
    color: '#4B5563',
  },

  actions: {
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 1,
  },

  actionItem: {
    alignItems: 'center',
  },

  actionText: {
    marginTop: 6,
    fontSize: 12,
    color: '#111827',
    fontWeight: '500',
  },
});
