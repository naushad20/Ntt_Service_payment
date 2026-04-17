import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ServiceUnavailableModal = ({visible, onClose}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          <Text style={styles.modalTile}>
            The service will be unavailable right now
          </Text>

          <Text style={styles.modalSubTitle}>
            Kindly try again tomorrow between 11 AM to 5 PM
          </Text>

          <Text style={styles.thankYouText}>Thank you!</Text>

          <TouchableOpacity onPress={onClose} style={styles.okButton}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalBody: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTile: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSubTitle: {
    textAlign: 'center',
    marginBottom: 15,
  },
  thankYouText: {fontSize: 16, fontStyle: 'italic', marginBottom: 20},
  okButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  okButtonText: {color: 'white', fontWeight: '600'},
});

export default ServiceUnavailableModal;
