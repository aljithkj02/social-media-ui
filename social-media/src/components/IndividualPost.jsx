import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Text, Input, Image, useColorMode, Button } from '@chakra-ui/react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Comment } from './'

const IndividualPost = ({ post }) => {
    const { name, profilePic, desc, img} = post;
    const [ commentOpen, setCommentOpen ] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const like = false;
  return (
    <Box borderRadius="20px" bgColor={colorMode == 'light' ? "white" : "#222" } boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
        <Box p="20px" >
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap="15px"> 
                    <Image src={ profilePic } h="40px" w="40px" borderRadius="50%" objectFit="cover" />
                    <Box>
                        <Link to='/profile/2' style={{ color: "inherit"}}>
                            <Text fontSize="15px" fontWeight="500">{ name }</Text>
                            <Text fontSize="13px">1 min ago</Text>
                        </Link>
                    </Box>
                </Box>
                <MoreHorizIcon />
            </Box>

            <Box m="20px 0">
                <Text>{ desc } </Text>
                <Image src={ img } w="100%" maxH="500px" objectFit="cover" mt="20px" />
            </Box>

            <Box display="flex" alignItems="center" gap="25px">
                <Box display="flex" alignItems="center" gap="5px" cursor="pointer">
                    {like ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/> }
                    <Text fontSize="15px">12 likes </Text>
                </Box>
                <Box display="flex" alignItems="center" gap="5px" cursor="pointer"
                    onClick={ ()=> setCommentOpen(!commentOpen) }
                >
                    <TextsmsOutlinedIcon/>
                    <Text fontSize="15px">3 comments</Text>
                </Box>
                <Box display="flex" alignItems="center" gap="5px" cursor="pointer">
                    <ShareOutlinedIcon/>
                    <Text fontSize="15px">share </Text>
                </Box>
            </Box>

            {commentOpen && <Comment />}
        </Box>
        
    </Box>
  )
}

export default IndividualPost