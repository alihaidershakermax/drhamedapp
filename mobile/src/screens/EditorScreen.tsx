import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';

type RootStackParamList = {
  Home: undefined;
  Editor: { projectId: number };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Editor'>;

export default function EditorScreen({ route }: Props) {
  const { projectId } = route.params;
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      await axios.post('http://10.0.2.2:8000/ai/generate', { projectId });
      // Polling simplified for POC; ideally use WS/SSE
      setTimeout(async () => {
        const res = await axios.get(`http://10.0.2.2:8000/projects/${projectId}`);
        setContent(res.data.content_md ?? 'لم يتم التوليد بعد');
        setLoading(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    generate();
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <ScrollView style={styles.container}>
      <Text selectable>{content}</Text>
      <Button title="تحديث" onPress={generate} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
