import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import api from './api.js';

export default function LoginScreen() {

  const scheme = useColorScheme();
  const T = scheme === 'dark' ? theme.dark : theme.light;
  const Tnot = scheme === 'dark' ? theme.light : theme.dark;
  const insets = useSafeAreaInsets();

  const [user_type, setUser_type] = useState("Student");
  const [userinputval, setUserinputval] = useState("");
  const [passinputval, setPassinputval] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [focusUser, setFocusUser] = useState(false);
  const [focusPass, setFocusPass] = useState(false);

  const [togglemargin, setToggleMargin] = useState(styles.formCenter.marginTop);
  const [toggleStyle, setToggleStyle] = useState(styles.textBig);

  useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', () => {
      setToggleMargin(styles.formShift.marginTop);
      setToggleStyle(styles.textSmall);
    });

    const hide = Keyboard.addListener('keyboardDidHide', () => {
      setToggleMargin(styles.formCenter.marginTop);
      setToggleStyle(styles.textBig);
    });

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  const url_login = "http://10.246.214.231:3000/api/login";

  const details_login = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: userinputval,
      pass: passinputval,
      type: user_type
    })
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[
        styles.root,
        {
          backgroundColor: T.bg,
          paddingTop: insets.top + 10,
          paddingBottom: insets.bottom + 10
        }
      ]}>

        {/* HEADER */}
        <View style={styles.header}>

          <View style={[
            styles.iconCircle,
            { backgroundColor: T.primary }
          ]}>
            <FontAwesome name="bluetooth-b" size={22} color={Tnot.text} />
          </View>

          <Text style={[styles.logo, { color: T.primary }]}>
            EACON MARK
          </Text>
        </View>

        {/* FORM */}
        <View style={[styles.form, { marginTop: togglemargin }]}>

          <Text style={[toggleStyle, { color: T.text }]}>
            {user_type} Login
          </Text>

          <View style={styles.formContainer}>

            {/* USER INPUT */}
            <View style={[
              styles.inputRow,
              {
                backgroundColor: T.card,
                borderColor: focusUser ? T.primary : T.subText
              }
            ]}>

              <View style={[
                styles.leftIconCircle,
                {
                  backgroundColor: T.primary,
                  opacity: focusUser ? 0.25 : 1
                }
              ]}>
                <FontAwesome name="user" size={18} color={Tnot.text} />
              </View>

              <TextInput
                placeholder={user_type + " ID"}
                placeholderTextColor={T.subText}
                onChangeText={setUserinputval}
                onFocus={() => setFocusUser(true)}
                onBlur={() => setFocusUser(false)}
                style={[styles.input, { color: T.text }]}
              />
            </View>


            {/* PASSWORD INPUT */}
            <View style={[
              styles.inputRow,
              {
                backgroundColor: T.card,
                borderColor: focusPass ? T.primary : T.subText
              }
            ]}>
              <View style={[
                styles.leftIconCircle,
                {
                  backgroundColor: T.primary,
                  opacity: focusPass ? 0.25 : 1
                }
              ]}>
                <FontAwesome name="lock" size={18} color={Tnot.text} />
              </View>

              <TextInput
                placeholder="Password"
                placeholderTextColor={T.subText}
                secureTextEntry={!showPass}
                onChangeText={setPassinputval}
                onFocus={() => setFocusPass(true)}
                onBlur={() => setFocusPass(false)}
                style={[styles.input, { color: T.text }]}
              />

              <TouchableOpacity
                onPress={() => setShowPass(!showPass)}
                style={styles.eyeContainer}
              >
                <MaterialIcons
                  name={showPass ? "visibility-off" : "visibility"}
                  size={22}
                  color={focusPass ? T.primary : T.subText}
                  style={{ opacity: focusPass ? 0.7 : 1 }}
                />
              </TouchableOpacity>
            </View>

            {/* SMALL BUTTONS */}
            <View style={styles.smallBtnRow}>
              <TouchableOpacity onPress={() =>
                setUser_type(user_type === "Student" ? "Staff" : "Student")
              }>
                <Text style={[styles.smallBtn, { color: T.primary }]}>
                  {user_type === "Student" ? "Staff" : "Student"}?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={[styles.smallBtn, { color: T.primary }]}>
                  Register?
                </Text>
              </TouchableOpacity>
            </View>

            {/* LOGIN BUTTON */}
            <TouchableOpacity
              onPress={() => api(url_login, details_login)}
              style={[styles.loginBtn, { backgroundColor: T.primary }]}
            >
              <Text style={[styles.loginText, { color: Tnot.text }]}>
                Login
              </Text>
            </TouchableOpacity>

            {/* FORGOT PASSWORD */}
            <TouchableOpacity>
              <Text style={[styles.smallBtn, { color: T.subText }]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


/* =============== THEME ================ */
const theme = {
  light: {
    bg: '#EEF2F7',
    card: '#FFFFFF',
    primary: '#4F46E5',
    text: '#0F172A',
    subText: '#64748B',
  },
  dark: {
    bg: '#0B1220',
    card: '#020617',
    primary: '#38BDF8',
    text: '#F8FAFC',
    subText: '#94A3B8',
  },
};


/* =============== STYLES =============== */
const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconCircle: {
    padding: 6,
    borderRadius: 50,
  },

  logo: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing:1
  },

  form: {
    width: '100%',
    alignItems: 'center',
  },

  formContainer: {
    width: '80%',
  },

  formShift: {
    marginTop: '15%',
  },

  formCenter: {
    marginTop: '50%',
  },

  textBig: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '5%',
  },

  textSmall: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: '5%',
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    width: '100%',
    marginTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
  },

  leftIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },

  eyeContainer: {
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  smallBtnRow: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  smallBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },

  loginBtn: {
    height: 50,
    borderRadius: 50,
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
