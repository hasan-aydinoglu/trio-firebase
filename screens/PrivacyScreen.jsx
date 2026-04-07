import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PrivacyScreen() {
  return (
    <LinearGradient
      colors={['#01040B', '#031327', '#041B38', '#020814']}
      style={styles.container}
    >
      {/* Glow Effects */}
      <View style={styles.bgGlowOne} />
      <View style={styles.bgGlowTwo} />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Privacy Policy</Text>

        <View style={styles.card}>
          <Text style={styles.section}>1. Introduction</Text>
          <Text style={styles.text}>
            Your privacy is important to us. This Privacy Policy explains how Trio collects, uses, and protects your personal information.
          </Text>

          <Text style={styles.section}>2. Information We Collect</Text>
          <Text style={styles.text}>
            We may collect your email address, account information, and app usage data to improve our services.
          </Text>

          <Text style={styles.section}>3. Use of Information</Text>
          <Text style={styles.text}>
            The collected data is used to operate, maintain, and enhance the functionality of the application.
          </Text>

          <Text style={styles.section}>4. Data Protection</Text>
          <Text style={styles.text}>
            We implement appropriate security measures to protect your personal data against unauthorized access.
          </Text>

          <Text style={styles.section}>5. Sharing</Text>
          <Text style={styles.text}>
            We do not sell or share your personal data except when required by law or necessary for service operation.
          </Text>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>All rights reserved.</Text>

            <Text style={styles.footerTextBold}>
              © Hasan Aydinoglu Company
            </Text>

            <Text style={styles.footerSub}>
              All intellectual property rights, including but not limited to software, design, content, and branding, are the exclusive property of Hasan Aydinoglu Company. Unauthorized use, reproduction, or distribution is strictly prohibited.
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },

  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: 'rgba(35, 56, 125, 0.34)',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
  },

  section: {
    fontSize: 18,
    fontWeight: '700',
    color: '#38D67A',
    marginTop: 15,
    marginBottom: 8,
  },

  text: {
    color: '#E5ECF5',
    fontSize: 15,
    lineHeight: 24,
  },

  footer: {
    marginTop: 30,
    paddingTop: 15,
    borderTopWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },

  footerText: {
    color: '#aaa',
    fontSize: 13,
    textAlign: 'center',
  },

  footerTextBold: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 4,
  },

  footerSub: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 18,
  },

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
    bottom: 120,
    right: -60,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(54,110,255,0.15)',
  },
});