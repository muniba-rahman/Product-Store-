// import { Box, Heading, HStack, IconButton, Image, Text } from '@chakra-ui/react'
// import React from 'react'
// import { FiEdit } from "react-icons/fi";
// import { MdDeleteOutline } from "react-icons/md";

// export default function ProductCard({data}) {
//   return (
//     <Box shadow={"lg"} rounded={"lg"} overflow={"hidden"} transition={"all 0.3s"} _hover={{ transform: "translateY(-5px)", shadow: 'xl'}}>
//         <Image src={data?.image} alt={data?.name} h={"48"} w={"full"} objectFit={"cover"} />
//         <Box p={4}>
//             <Heading as={"h3"} size={"md"} mb={2}>{data?.name}</Heading>
//             <Text fontWeight={"bold"} fontSize={"xl"} mb={4} color={textColor} >{`$${data?.price}`}</Text>
//             <HStack spacing={2}>
//                 <IconButton icon={<FiEdit />} colorScheme='blue' />
//                 {/* <IconButton icon={<EditIcon/>} onClick={handleEdit} colorScheme='blue' /> */}
//                 <IconButton icon={<MdDeleteOutline />} colorScheme='red' />
//                 {/* <IconButton icon={<EditIcon/>} onClick={()=> handleDelete(data?._id)} colorScheme='red' /> */}
//             </HStack>
//         </Box>
//     </Box>
//   )
// }


import { Box, Heading, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export default function ProductCard({ data }) {
  return (
    <Box shadow={"lg"} rounded={"lg"} overflow={"hidden"} transition={"all 0.3s"} _hover={{ transform: "translateY(-5px)", shadow: 'xl' }}>
      <Image src={data?.image || '/path/to/fallback-image.jpg'} alt={data?.name} h={"48"} w={"full"} objectFit={"cover"} />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>{data?.name}</Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} mb={4}>{`$${data?.price}`}</Text>
        <HStack spacing={2}>
          <IconButton icon={<FiEdit />} colorScheme='blue' />
          <IconButton icon={<MdDeleteOutline />} colorScheme='red' />
        </HStack>
      </Box>
    </Box>
  )
}
