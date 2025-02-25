/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { Animated, Modal, Pressable, StyleSheet } from 'react-native';

const ModalizeComponent = ({ visible, onClose, renderComponent }: {visible: boolean; onClose: () => void; renderComponent: React.ReactNode}) => {
  const translateY = useRef(new Animated.Value(300)).current;
  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent animationType="fade">
      <Pressable style={styles.backgroundContainer} onPress={onClose} />
      <Animated.View style={[styles.cardModalBottomWrapper, { transform: [{ translateY }] }]}>
        {renderComponent}
      </Animated.View>
    </Modal>
  );
};

export default ModalizeComponent;

const styles = StyleSheet.create({
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000071',
  },
  cardModalBottomWrapper: {
    position: 'absolute',
    bottom: 0,
    height: '40%',
    backgroundColor: '#FFF',
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 12,
    paddingTop: 16,
  },
});
