import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Stat {
  label: string;
  value: number | string;
}

interface StatsProps {
  stats: Stat[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => (
  <View style={styles.stats}>
    {stats.map((stat, idx) => (
      <View style={styles.statItem} key={idx}>
        <Text style={styles.statNumber}>{stat.value}</Text>
        <Text style={styles.statLabel}>{stat.label}</Text>
      </View>
    ))}
  </View>
);

export default Stats;