// compos/LoginScreen.jsx
// LOGIN SCREEN
// Follows system/default theme (no toggle here)
// Navigates to Profile on login (API skipped for now)

import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from '../context/ThemeContext.jsx';
import { theme } from '../theme/theme.js';

export default function LoginScreen() {

  // Get theme from context (system default initially)
  const { dark } = useContext(ThemeContext);
  const T = dark ? theme.dark : theme.light;
  const Tnot = dark ? theme.light : theme.dark;

  // Navigation handler
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  // Local states
  const [user_type, setUser_type] = useState("Student");
  const [userinputval, setUserinputval] = useState("");
  const [passinputval, setPassinputval] = useState("");
  const [showPass, setShowPass] = useState(false);

  // Focus states for futuristic UI effect
  const [focusUser, setFocusUser] = useState(false);
  const [focusPass, setFocusPass] = useState(false);

  // Keyboard shifting logic
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

  // For now navigation only (API can be inserted later)
  const handleLogin = () => {
    navigation.navigate("Profile");
  };

  const handleRegOrFor=()=>{
    navigation.navigate("s2");
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

            {/* USER FIELD */}
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

            {/* PASSWORD FIELD */}
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

              <TouchableOpacity onPress={handleRegOrFor}>
                <Text style={[styles.smallBtn, { color: T.primary }]}>
                  Register?
                </Text>
              </TouchableOpacity>
            </View>

            {/* LOGIN BUTTON */}
            <TouchableOpacity
              onPress={handleLogin}
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


/* ==========================================
   STYLES (unchanged from your original)
   ========================================== */
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
    letterSpacing: 1,
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
