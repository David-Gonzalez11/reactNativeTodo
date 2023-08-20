import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";

const Task = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskItems, setTaskItems] = useState([]);

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    setModalVisible(false); // Close the modal after deleting the task
        props.onDelete(props.index); // Notify the parent component to delete the task
    setModalVisible(false); // Close the modal after deleting the task

  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <View style={styles.centeredView}>
           <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Are you sure you want to delete this task?
                </Text>
                <View style={styles.buttonContainer}/>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => completeTask(props.index)} // Pass the index as a parameter
                />
                <View style={styles.textStyle}>

                  <Text style={styles.textStyle}>Yes</Text>

                   <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(false)}
                  />
                    <Text style={styles.textStyle}>No</Text>

                 </View>

              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "blue",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    color: "red"
  },
   button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
    buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    display: "flex"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
})

export default Task
