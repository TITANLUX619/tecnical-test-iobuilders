import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React from "react";
import useLogic from "./TransactionModal.logic";

const TransactionModalComponent = () => {
  const {
    isOpen,
    onOpen,
    onClose,
    onLabelChange,
    onAmountChange,
    onDestinataryChange,
    sendTransaction,
  } = useLogic();

  return (
    <>
      <Button onClick={onOpen}>New Transaction</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Concept:
            <Input onChange={onLabelChange} size="md" />
            Amount:
            <NumberInput defaultValue={0} min={0}>
              <NumberInputField onChange={onAmountChange} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            Destinatary:
            <Input onChange={onDestinataryChange} size="md" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={sendTransaction} variant="ghost">
              Send Money
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TransactionModalComponent;
