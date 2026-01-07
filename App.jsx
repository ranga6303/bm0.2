import React, {useEffect, useRef, useState} from 'react';
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
  /* ===== HOOKS ===== */
  const [dark, setDark] = useState(false);

  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const T = dark ? theme.dark : theme.light;

  return (
    <View style={[styles.root, {backgroundColor: T.bg}]}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />

      {/* HEADER */}
      <View style={[styles.header, {backgroundColor: T.header}]}>
        <Text style={[styles.logo, {color: T.primary}]}>MARK</Text>

        <TouchableOpacity onPress={() => setDark(!dark)}>
          <Ionicons
            name={dark ? 'sunny-outline' : 'moon-outline'}
            size={22}
            color={T.text}
          />
        </TouchableOpacity>
      </View>

      <Animated.View
        style={{
          opacity: fade,
          transform: [{scale}],
          alignItems: 'center',
        }}>

        {/* PROFILE */}
        <View style={[styles.profileCard, {backgroundColor: T.card}]}>
          <Image
            source={require('./assets/user.png')}
            style={styles.avatar}
          />
          <Text style={[styles.name, {color: T.text}]}>
            Uzumaki Naruto
          </Text>
          <Text style={[styles.id, {color: T.subText}]}>
            Student · 1234567890
          </Text>
        </View>

        {/* STATS */}
        <View style={styles.stats}>
          <Stat label="Overall" value="98" theme={T} />
          <Stat label="Month" value="95" theme={T} />
          <Stat label="Today" value="100" theme={T} />
        </View>

        {/* ACTIONS */}
        <View style={[styles.actionCard, {backgroundColor: T.card}]}>
          <Action
            icon="how-to-reg"
            label="Mark Attendance"
            theme={T}
          />
          <Action
            icon="bar-chart"
            label="Analytics"
            theme={T}
          />
          <Action
            icon="settings"
            label="Settings"
            theme={T}
          />
        </View>
      </Animated.View>
    </View>
  );
}

/* ===== COMPONENTS ===== */

const Stat = ({label, value, theme}) => (
  <View style={[styles.statBox, {backgroundColor: theme.soft}]}>
    <Text style={[styles.statValue, {color: theme.primary}]}>
      {value}%
    </Text>
    <Text style={[styles.statLabel, {color: theme.subText}]}>
      {label}
    </Text>
  </View>
);

const Action = ({icon, label, theme}) => (
  <TouchableOpacity style={styles.action}>
    <MaterialIcons name={icon} size={26} color={theme.primary} />
    <Text style={[styles.actionText, {color: theme.text}]}>
      {label}
    </Text>
  </TouchableOpacity>
);

/* ===== THEME ===== */

const theme = {
  light: {
    bg: '#EEF2F7',
    header: '#FFFFFF',
    card: '#FFFFFF',
    soft: '#F1F5F9',
    primary: '#4F46E5',
    text: '#0F172A',
    subText: '#64748B',
  },
  dark: {
    bg: '#0B1220',
    header: '#020617',
    card: '#020617',
    soft: '#0F172A',
    primary: '#38BDF8',
    text: '#F8FAFC',
    subText: '#94A3B8',
  },
};

/* ===== STYLES ===== */

const styles = StyleSheet.create({
  root: {flex: 1},

  header: {
    height: 72,
    paddingHorizontal: 20,
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 2,
  },

  profileCard: {
    marginTop: 30,
    width: '88%',
    borderRadius: 26,
    alignItems: 'center',
    paddingVertical: 28,
    elevation: 8,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 14,
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
  },

  id: {
    marginTop: 4,
    fontSize: 14,
  },

  stats: {
    marginTop: 18,
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statBox: {
    width: '30%',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
  },

  statValue: {
    fontSize: 22,
    fontWeight: '800',
  },

  statLabel: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
  },

  actionCard: {
    marginTop: 22,
    width: '88%',
    borderRadius: 26,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: 6,
  },

  action: {
    alignItems: 'center',
    gap: 6,
  },

  actionText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
