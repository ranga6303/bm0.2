import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
  Alert,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Profile() {
  const [dark, setDark] = useState(false);
  const [st, Setst] = useState(true);

  const T = dark ? theme.dark : theme.light;
  const Tnot = dark ? theme.light : theme.dark;

  const showPop = (txt) => {
    Alert.alert('Pressed', txt);
  };

  return (
    <View style={[styles.root, { backgroundColor: T.bg }]}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />

      {/* HEADER */}
      <View style={[styles.header, { backgroundColor: T.header }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{
            height: 25,
            width: 20,
            borderRadius: 50,
            backgroundColor: T.primary,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FontAwesome name="bluetooth-b" size={18} style={{ color: Tnot.text }} />
          </View>

          <Text style={[styles.logo, { color: T.text }]}>
            Mark{st ? '' : ''}
          </Text>
        </View>

        <Pressable onPress={() => setDark(!dark)}>
          <Ionicons
            name={dark ? 'sunny-outline' : 'moon-outline'}
            size={22}
            color={T.text}
          />
        </Pressable>
      </View>

      {/* PROFILE */}
      <View style={{ alignItems: 'center' }}>
        <View style={[styles.profileCard, { backgroundColor: T.card }]}>
          <Image
            source={require('../assets/user.png')}
            style={styles.avatar}
          />
          <Text style={[styles.name, { color: T.text }]}>
            Uzumaki Naruto
          </Text>
          <Text style={[styles.id, { color: T.subText }]}>
            Student · 1234567890
          </Text>
        </View>

        {/* STATS */}
        <View style={styles.stats}>
          <Stat label="Overall" value="98" theme={T} onPress={() => showPop('Overall')} />
          <Stat label="Month" value="95" theme={T} onPress={() => showPop('Month')} />
          <Stat label="Today" value="100" theme={T} onPress={() => showPop('Today')} />
        </View>

        {/* ACTIONS */}
        <View style={[styles.actionCard, { backgroundColor: T.card }]}>
          <Action icon="how-to-reg" label="Mark prsnc" theme={T} onPress={() => showPop('Mark prsnc')} />
          <Action icon="bar-chart" label="Analytics" theme={T} onPress={() => showPop('Analytics')} />
          <Action icon="settings" label="Settings" theme={T} onPress={() => Setst(!st)} />
        </View>
      </View>
    </View>
  );
}

/* ===== COMPONENTS ===== */

const Stat = ({ label, value, theme, onPress }) => (
  <Pressable
    style={[styles.statBox, { backgroundColor: theme.soft }]}
    onPress={onPress}
  >
    <Text style={[styles.statValue, { color: theme.primary }]}>{value}%</Text>
    <Text style={[styles.statLabel, { color: theme.subText }]}>{label}</Text>
  </Pressable>
);

const Action = ({ icon, label, theme, onPress }) => (
  <Pressable
    style={styles.action}
    onPress={onPress}
    android_ripple={{ color: theme.primary + '22' }}
  >
    <MaterialIcons name={icon} size={26} color={theme.primary} />
    <Text style={[styles.actionText, { color: theme.text }]}>{label}</Text>
  </Pressable>
);

/* ===== THEME ===== */

const theme = {
  light: {
    bg: '#EEF2F7',
    header: '#FFFFFF',
    card: '#FFFFFF',
    soft: '#d2d7ddc0',
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
  root: { flex: 1 },

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

  name: { fontSize: 22, fontWeight: '700' },

  id: { marginTop: 4, fontSize: 14 },

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

  statValue: { fontSize: 22, fontWeight: '800' },

  statLabel: { marginTop: 4, fontSize: 12, fontWeight: '600' },

  actionCard: {
    marginTop: 22,
    width: '88%',
    borderRadius: 26,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: 6,
  },

  action: { alignItems: 'center', gap: 6 },

  actionText: { fontSize: 13, fontWeight: '600' },
});
