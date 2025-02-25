import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

const LoadingComponent = ({isVisible, loadingColor = 'blue', size = 'small'}: {isVisible: boolean; loadingColor?: string; size?: number | 'small' | 'large' | undefined}) => {
  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.loadingContainer}>
        <View style={styles.loadingCardWrapper}>
          <ActivityIndicator size={size} color={loadingColor} />
        </View>
      </View>
    </Modal>
  );
};
export default LoadingComponent;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#00000027',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingCardWrapper: {
    backgroundColor: '#fff',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
