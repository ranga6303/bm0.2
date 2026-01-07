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

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  /* ===== STABLE HOOKS (NEVER CHANGE ORDER) ===== */
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Attendance</Text>
        <Ionicons name="notifications-outline" size={22} color="#1F2937" />
      </View>

      <Animated.View style={{opacity: fadeIn}}>

        {/* PROFILE */}
        <View style={styles.profileCard}>
          <Image
            source={require('./assets/user.png')}
            style={styles.avatar}
          />

          <Text style={styles.name}>Uzumaki Naruto</Text>
          <Text style={styles.subText}>Student ID · 1234567890</Text>
        </View>

        {/* STATS */}
        <View style={styles.statsRow}>
          <Stat title="Overall" value="96%" />
          <Stat title="This Month" value="94%" />
          <Stat title="Today" value="100%" />
        </View>

        {/* ACTIONS */}
        <View style={styles.actionCard}>
          <Action
            icon="how-to-reg"
            label="Mark Attendance"
          />
          <Action
            icon="bar-chart"
            label="View Progress"
          />
          <Action
            icon="settings"
            label="Settings"
          />
        </View>

      </Animated.View>
    </View>
  );
}

/* ===== COMPONENTS (NO HOOKS) ===== */

const Stat = ({title, value}) => (
  <View style={styles.statBox}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{title}</Text>
  </View>
);

const Action = ({icon, label}) => (
  <TouchableOpacity style={styles.actionItem} activeOpacity={0.7}>
    <MaterialIcons name={icon} size={26} color="#2563EB" />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

/* ===== STYLES ===== */

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },

  header: {
    height: 70,
    paddingTop: 22,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  appTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },

  profileCard: {
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 24,
    elevation: 2,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },

  subText: {
    marginTop: 4,
    fontSize: 13,
    color: '#6B7280',
  },

  statsRow: {
    marginTop: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statBox: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    elevation: 2,
  },

  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2563EB',
  },

  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#6B7280',
  },

  actionCard: {
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 2,
  },

  actionItem: {
    alignItems: 'center',
    gap: 6,
  },

  actionText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#111827',
  },
});
