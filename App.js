import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [points, setPoints] = useState(0);

  const profile = {
    name: 'Chathuka',
    email: 'chathuka@nsbm.ac.lk',
    avatar: { uri: 'https://i.pravatar.cc/200' },
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* App bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>My Profile</Text>
      </View>

      {/* Avatar with verified badge */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarCircle}>
          <Image source={profile.avatar} style={styles.avatar} />
          <Ionicons
            name="checkmark-sharp"
            size={34}
            color="#22e22e"
            style={styles.badge}
          />
        </View>
      </View>

      <View style={styles.divider} />

      {/* Details */}
      <View style={styles.details}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{profile.name}</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={16} color="#000" />
          <Text style={[styles.value, styles.rowText]}>{profile.email}</Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={16} color="#000" />
          <Text style={[styles.value, styles.rowText]}>{points}</Text>
        </View>
      </View>

      {/* Floating action button */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={() => setPoints(points + 1)}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  appBar: {
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    height: (Platform.OS === 'android' ? StatusBar.currentHeight : 50) + 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 108,
    height: 108,
    borderRadius: 54,
  },
  badge: {
    position: 'absolute',
    right: 4,
    bottom: 8,
  },
  divider: {
    height: 2,
    backgroundColor: '#333',
    marginHorizontal: 16,
  },
  details: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
  value: {
    fontSize: 15,
    color: '#222',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rowText: {
    marginTop: 0,
    marginLeft: 8,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});