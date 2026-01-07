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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const App = () => {
  /* ================= HOOKS (TOP ONLY) ================= */
  const [darkMode, setDarkMode] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  /* ================= THEME ================= */
  const theme = darkMode ? dark : light;

  return (
    <View style={[styles.container, {backgroundColor: theme.bg}]}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />

      {/* HEADER */}
      <View style={[styles.header, {backgroundColor: theme.header}]}>
        <View style={styles.headerLeft}>
          <FontAwesome name="bluetooth" size={22} color={theme.primary} />
          <Text style={[styles.headerTitle, {color: theme.textPrimary}]}>
            Mark
          </Text>
        </View>

        <TouchableOpacity onPress={() => setDarkMode(prev => !prev)}>
          <Ionicons
            name={darkMode ? 'sunny-outline' : 'moon-outline'}
            size={22}
            color={theme.textPrimary}
          />
        </TouchableOpacity>
      </View>

      {/* CONTENT */}
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{translateY: slideAnim}],
          },
        ]}>

        {/* PROFILE */}
        <View style={[styles.profileCard, {backgroundColor: theme.card}]}>
          <Image
            source={require('./assets/user.png')}
            style={styles.avatar}
          />
          <Text style={[styles.username, {color: theme.textPrimary}]}>
            Uzumaki Naruto
          </Text>
          <Text style={[styles.userid, {color: theme.textSecondary}]}>
            ID · 1234567890
          </Text>
        </View>

        {/* STATS */}
        <View style={styles.statsRow}>
          {['OVERALL', 'MONTH', 'TODAY'].map(label => (
            <TouchableOpacity
              key={label}
              activeOpacity={0.85}
              style={[styles.statCard, {backgroundColor: theme.card}]}>
              <Text style={[styles.statValue, {color: theme.primary}]}>
                100<Text style={styles.percent}>%</Text>
              </Text>
              <Text style={[styles.statLabel, {color: theme.textSecondary}]}>
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ACTIONS */}
        <View style={[styles.actionsCard, {backgroundColor: theme.card}]}>
          <Action
            icon={
              <MaterialIcons
                name="how-to-reg"
                size={28}
                color={theme.primary}
              />
            }
            label="Mark Presence"
            theme={theme}
          />
          <Action
            icon={
              <Ionicons
                name="stats-chart-outline"
                size={28}
                color={theme.primary}
              />
            }
            label="Progress"
            theme={theme}
          />
          <Action
            icon={
              <Ionicons
                name="settings-outline"
                size={28}
                color={theme.primary}
              />
            }
            label="Settings"
            theme={theme}
          />
        </View>
      </Animated.View>
    </View>
  );
};

const Action = ({icon, label, theme}) => (
  <TouchableOpacity style={styles.actionItem} activeOpacity={0.8}>
    {icon}
    <Text style={[styles.actionLabel, {color: theme.textPrimary}]}>
      {label}
    </Text>
  </TouchableOpacity>
);

/* ================= THEMES ================= */

const light = {
  bg: '#EEF2F5',
  header: '#FFFFFF',
  card: '#FFFFFF',
  primary: '#4F46E5',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
};

const dark = {
  bg: '#0F172A',
  header: '#020617',
  card: '#020617',
  primary: '#38BDF8',
  textPrimary: '#F8FAFC',
  textSecondary: '#94A3B8',
};

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {flex: 1},

  header: {
    height: 70,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
  },

  content: {
    alignItems: 'center',
  },

  profileCard: {
    marginTop: 24,
    width: '90%',
    borderRadius: 24,
    alignItems: 'center',
    paddingVertical: 24,
    elevation: 6,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
  },

  username: {
    fontSize: 22,
    fontWeight: '700',
  },

  userid: {
    fontSize: 14,
    marginTop: 4,
  },

  statsRow: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 16,
    gap: 12,
  },

  statCard: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: 'center',
    elevation: 4,
  },

  statValue: {
    fontSize: 28,
    fontWeight: '800',
  },

  percent: {
    fontSize: 14,
  },

  statLabel: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  actionsCard: {
    width: '90%',
    marginTop: 18,
    borderRadius: 24,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: 6,
  },

  actionItem: {
    alignItems: 'center',
    gap: 6,
  },

  actionLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
});

export default App;
