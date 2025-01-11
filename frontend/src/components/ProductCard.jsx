import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useProductStore } from '../store/product';

export default function ProductCard({ data }) {

  const toast = useToast();
  const { deleteProduct, updateProduct } = useProductStore();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [update, setUpdate] = useState(data);

  const handleDelete = async (id) => {
    const { success, message } = await deleteProduct(id);
    toast({
      position: 'top-right',
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleUpdate = async (id, updatedProduct) => {
    const { success, message } = await updateProduct(id, updatedProduct);
    onClose();
    toast({
      position: "top-right",
      title: success === true ? "Success" : "Error",
      description: success === true ? "Product Updated Successfully" : message,
      duration: 3000,
      isClosable: true,
      status: success === true ? "success" : "error",
    });
  }

  return (
    <Box shadow={"lg"} rounded={"lg"} overflow={"hidden"} transition={"all 0.3s"} _hover={{ transform: "translateY(-5px)", shadow: 'xl' }} bg={useColorModeValue("white", "gray.800")}>
      <Image src={data?.image || '/path/to/fallback-image.jpg'} alt={data?.name} h={"48"} w={"full"} objectFit={"cover"} />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>{data?.name}</Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} mb={4}>{`$${data?.price}`}</Text>
        <HStack spacing={2}>
          <IconButton icon={<FiEdit />} colorScheme='blue' onClick={onOpen} />
          <IconButton icon={<MdDeleteOutline />} onClick={() => handleDelete(data?._id)} colorScheme='red' />
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder='Product Name' name='name' value={update.name} onChange={(e) => setUpdate({ ...update, name: e.target.value })} />
              <Input placeholder='Product Price' type='number' name='price' value={update.price} onChange={(e) => setUpdate({ ...update, price: e.target.value })} />
              <Input placeholder='Image URL' name='image' value={update.image} onChange={(e) => setUpdate({ ...update, image: e.target.value })} />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => handleUpdate(data?._id, update)} >Update</Button>
            <Button variant={"ghost"} onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
