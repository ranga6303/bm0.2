import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from './api';

export default function Profile({ route }) {
  /* ---------- navigation params ---------- */
  const logindetails = route?.params;

  console.log('received from Screen1:', logindetails);

  /* ---------- API ---------- */
  const userdetails_url = 'http://10.212.32.231:8082/api/login';

  /* ---------- state ---------- */
  const [userdata, setUserdata] = useState({
    username: 'default',
    rollno: 'default',
    branch: 'CSE',
    year: 'default',
    mesg: 'default',
    section: 'D',
    phone: 'default',
    email: 'default',
  });

  /* ---------- fetch user data ---------- */
  useEffect(() => {
    if (!logindetails) return;

    const fetchData = async () => {
      const details = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: logindetails.userid,
          pass: logindetails.password,
          type: logindetails.usertype,
        }),
      };

      const data = await api(userdetails_url, details);
      if (data) setUserdata(data);
    };

    fetchData();
  }, [logindetails]);

  /* ---------- settings data ---------- */
  const settingsData = [
    { id: '1', label: 'Dark theme' },
    
  ];

  /* ---------- flatlist sections ---------- */
  const sections = [{ key: 'profile' }, { key: 'settings' }];

  /* ---------- render items ---------- */
  const renderItem = ({ item }) => {
    if (item.key === 'profile') {
      return (
        <View style={styles.user_container}>
          <Image
            source={require('../assets/user.png')}
            style={styles.user_image}
          />

          <View style={styles.user_form}>
            <Text style={styles.boldtext_light}>{userdata.username}</Text>
            <Text style={styles.normaltext_light}>{userdata.rollno}</Text>
            <Text style={styles.normaltext_light}>
              {userdata.branch} - {userdata.year} Year
            </Text>
            <Text style={styles.normaltext_light}>
              sec-{userdata.section}
            </Text>
            <Text style={styles.normaltext_light}>
              Phone: {userdata.phone}
            </Text>
            <Text style={styles.normaltext_light}>
              Email: {userdata.email}
            </Text>
            <Text style={styles.normaltext_light}>
              message: {userdata.mesg}
            </Text>
          </View>
        </View>
      );
    }

    if (item.key === 'settings') {
      return (
        <View style={styles.settings_container}>
          {settingsData.map(setting => (
            <TouchableOpacity
              key={setting.id}
              style={styles.settings_touchables_dark}
              activeOpacity={0.7}
            >
              <Text style={styles.settings_lable_dark}>
                {setting.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }

    return null;
  };

  /* ---------- UI ---------- */
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Content */}
      <FlatList
        data={sections}
        keyExtractor={item => item.key}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        overScrollMode="never"
        bounces={false}
      />
    </View>
  );
}

/* ================== styles ================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272222ff',
  },

  header: {
    width: '100%',
    height: 70,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  listContent: {
    paddingBottom: 30,
    alignItems: 'center',
  },

  user_container: {
    borderRadius: 10,
    minHeight: 100,
    width: '95%',
    backgroundColor: 'rgba(32, 52, 45, 0.9)',
    marginTop: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  user_image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 12,
  },

  user_form: {
    flex: 1,
  },

  boldtext_light: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },

  normaltext_light: {
    fontSize: 14,
    marginBottom: 3,
    color: '#ddd',
  },

  settings_container: {
    borderRadius: 10,
    width: '95%',
    marginTop: 16,
  },

  settings_touchables_dark: {
    borderRadius: 40,
    width: '100%',
    height: 55,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginTop: 5,
    justifyContent: 'center',
    paddingLeft: 14,
  },

  settings_lable_dark: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
