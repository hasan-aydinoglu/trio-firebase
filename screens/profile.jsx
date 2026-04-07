import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Profile = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigation.navigate('Home');
    });
  };

  return (
    <LinearGradient
      colors={['#01040B', '#031327', '#041B38', '#020814']}
      style={styles.container}
    >
      {/* 🔵 Glow Effects (HOME ile aynı) */}
      <View style={styles.bgGlowOne} />
      <View style={styles.bgGlowTwo} />
      <View style={styles.bgGlowThree} />
      <View style={styles.bgCircleOne} />
      <View style={styles.bgCircleTwo} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* LOGO */}
        <View style={styles.logoWrapper}>
          <Text style={styles.logo}>Profile</Text>
        </View>

        {/* CARD */}
        <View style={styles.card}>
          <Image
            source={require('../assets/avatar.png')}
            style={styles.avatar}
          />

          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>
            {user ? user.email : 'Not signed in'}
          </Text>

          <Text style={styles.label}>Game Level</Text>
          <Text style={styles.value}>Beginner</Text>

          <Text style={styles.label}>Favorite Mode</Text>
          <Text style={styles.value}>Classic Trio</Text>

          <Text style={styles.label}>Friends</Text>
          <Text style={styles.value}>12 friends</Text>

          {/* Edit */}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#38D67A' }]}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Ionicons name="create-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>  Edit Profile</Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#e74c3c' }]}
            onPress={handleLogout}
          >
            <Ionicons name="log-out-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>  Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1 },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  logoWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },

  logo: {
    fontSize: 38,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  card: {
    backgroundColor: 'rgba(35, 56, 125, 0.34)', // HOME ile aynı cam efekti
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
    alignItems: 'center',
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#38D67A',
  },

  label: {
    color: '#BFC6D4',
    fontSize: 14,
    marginTop: 10,
  },

  value: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    width: '100%',
    justifyContent: 'center',
    marginTop: 12,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },

  /* 🔥 HOME'dan birebir aldık */
  bgGlowOne: {
    position: 'absolute',
    top: 120,
    left: -40,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(0,132,255,0.14)',
  },

  bgGlowTwo: {
    position: 'absolute',
    top: 260,
    right: -60,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(54,110,255,0.15)',
  },

  bgGlowThree: {
    position: 'absolute',
    bottom: 120,
    left: 30,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(0,214,255,0.08)',
  },

  bgCircleOne: {
    position: 'absolute',
    top: 170,
    right: 35,
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: 'rgba(49,97,255,0.22)',
  },

  bgCircleTwo: {
    position: 'absolute',
    bottom: 180,
    left: 45,
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: 'rgba(0,163,255,0.14)',
  },
});