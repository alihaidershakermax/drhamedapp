import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';

type RootStackParamList = {
  Home: undefined;
  Editor: { projectId: number };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [title, setTitle] = useState('');

  const createProject = async () => {
    if (!title) return;
    try {
      const res = await axios.post('http://10.0.2.2:8000/projects', {
        title,
        field: 'medicine',
        lang: 'ar',
      });
      navigation.navigate('Editor', { projectId: res.data.projectId });
    } catch (e) {
      console.error(e);
    }
  };

  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={{ marginBottom: 12 }}>
        عنوان البحث
      </Text>
      <TextInput
        mode="outlined"
        placeholder="أدخل العنوان"
        value={title}
        onChangeText={setTitle}
        style={{ marginBottom: 16 }}
      />
      <Button mode="contained" onPress={createProject} disabled={!title}>
        ابدأ
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  label: { fontSize: 18, marginBottom: 8 },
  input: { borderWidth: 1, padding: 8, marginBottom: 12, borderRadius: 6 },
});
