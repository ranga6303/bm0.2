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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  /* ===== HOOKS (FIXED ORDER, NEVER CHANGES) ===== */
  const glow = useRef(new Animated.Value(0)).current;   // JS driver
  const float = useRef(new Animated.Value(12)).current; // Native driver

  useEffect(() => {
    // Glow loop (JS)
    Animated.loop(
      Animated.sequence([
        Animated.timing(glow, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(glow, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: false,
        }),
      ]),
    ).start();

    // Floating motion (native)
    Animated.spring(float, {
      toValue: 0,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, []);

  const glowBorder = glow.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(56,189,248,0.3)', 'rgba(168,85,247,0.8)'],
  });

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>MARK.OS</Text>
        <Ionicons name="planet-outline" size={22} color="#38BDF8" />
      </View>

      {/* GLOW WRAPPER (JS DRIVER) */}
      <Animated.View
        style={[styles.glowWrapper, {borderColor: glowBorder}]}
      >
        {/* FLOAT CARD (NATIVE DRIVER) */}
        <Animated.View
          style={[
            styles.profileCard,
            {transform: [{translateY: float}]},
          ]}
        >
          <Image
            source={require('./assets/user.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>UZUMAKI NARUTO</Text>
          <Text style={styles.id}>UID · 1234567890</Text>
        </Animated.View>
      </Animated.View>

      {/* STATS */}
      <View style={styles.statsRow}>
        <Stat label="OVERALL" value="98%" />
        <Stat label="MONTH" value="95%" />
        <Stat label="TODAY" value="100%" />
      </View>

      {/* CONTROL PANEL */}
      <View style={styles.controlPanel}>
        <Action icon="fingerprint" label="AUTH" />
        <Action icon="chart-timeline-variant" label="DATA" />
        <Action icon="cog-outline" label="SYSTEM" />
      </View>
    </View>
  );
}

/* ===== SMALL COMPONENTS (NO HOOKS) ===== */

const Stat = ({label, value}) => (
  <View style={styles.statBox}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const Action = ({icon, label}) => (
  <TouchableOpacity style={styles.action} activeOpacity={0.8}>
    <MaterialCommunityIcons name={icon} size={28} color="#38BDF8" />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

/* ===== STYLES ===== */

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#020617',
    alignItems: 'center',
  },

  header: {
    width: '100%',
    height: 70,
    paddingTop: 24,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  logo: {
    color: '#A855F7',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 3,
  },

  glowWrapper: {
    marginTop: 24,
    width: '88%',
    borderRadius: 26,
    borderWidth: 2,
    padding: 2,
  },

  profileCard: {
    borderRadius: 24,
    alignItems: 'center',
    paddingVertical: 26,
    backgroundColor: 'rgba(15,23,42,0.95)',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#38BDF8',
  },

  name: {
    color: '#F8FAFC',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },

  id: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 4,
    letterSpacing: 1,
  },

  statsRow: {
    marginTop: 18,
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statBox: {
    width: '30%',
    backgroundColor: 'rgba(2,6,23,0.85)',
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(56,189,248,0.3)',
  },

  statValue: {
    color: '#38BDF8',
    fontSize: 20,
    fontWeight: '800',
  },

  statLabel: {
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 4,
    letterSpacing: 1,
  },

  controlPanel: {
    marginTop: 26,
    width: '88%',
    borderRadius: 24,
    backgroundColor: 'rgba(15,23,42,0.95)',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: 'rgba(168,85,247,0.4)',
  },

  action: {
    alignItems: 'center',
    gap: 6,
  },

  actionText: {
    color: '#E5E7EB',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
