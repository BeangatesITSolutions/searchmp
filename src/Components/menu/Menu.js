'use client'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Image from 'next/image';
import './menu.css'
// import  '@/assets/img'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Menu() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const menu = [
        {
            id: 1,
            imgurl: 'https://cdn-icons-png.freepik.com/256/15269/15269977.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading",
        },
        {
            id: 2,
            imgurl: 'https://cdn-icons-png.freepik.com/256/10564/10564229.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading"
        },
        {
            id: 3,
            imgurl: 'https://cdn-icons-png.freepik.com/256/15269/15269977.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading"
        },
        {
            id: 4,
            imgurl: 'https://cdn-icons-png.freepik.com/256/10564/10564229.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading"
        },
        {
            id: 5,
            imgurl: 'https://cdn-icons-png.freepik.com/256/10564/10564229.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading"
        },
        {
            id: 6,
            imgurl: 'https://cdn-icons-png.freepik.com/256/15269/15269977.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading"
        },
        {
            id: 7,
            imgurl: 'https://cdn-icons-png.freepik.com/256/10564/10564229.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading"
        },
        {
            id: 8,
            imgurl: 'https://cdn-icons-png.freepik.com/256/15269/15269977.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading"
        },
        {
            id: 9,
            imgurl: 'https://cdn-icons-png.freepik.com/256/10564/10564229.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading"
        },
        {
            id: 10,
            imgurl: 'https://cdn-icons-png.freepik.com/256/15269/15269977.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading"
        },
        {
            id: 11,
            imgurl: 'https://cdn-icons-png.freepik.com/256/10564/10564229.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading"
        },
        {
            id: 12,
            imgurl: 'https://cdn-icons-png.freepik.com/256/15269/15269977.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading"
        },
        {
            id: 13,
            imgurl: 'https://cdn-icons-png.freepik.com/256/10564/10564229.png?ga=GA1.1.595107801.1712916996&',
            title: "Heading"
        },

    ]

    return (
        <>
            <div >
                <Box sx={{ flexGrow: 1 }} padding={3}>
                    <Grid container spacing={2}>
                        {
                            menu.map((menuitem) => (

                                <Grid item xs={6} sm={4} md={3} lg={1}  className='flex justify-center '>
                                    <Item style={{ width: "110px", height: "110px" }} className='flex justify-center items-center flex-col'>
                                        <Image className='text-center' src={menuitem.imgurl} width={70} height={70} ></Image>
                                        <Typography variant="caption" gutterBottom className='font-bold'>
                                            {menuitem.title}
                                        </Typography>
                                    </Item>

                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>

            </div>
            {/* <div>
            <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Box sx={{ flexGrow: 1 }} padding={3}>
                    <Grid container spacing={2}>
                        {
                            menu.map((menuitem) => (

                                <Grid item xs={6} sm={4} md={3} lg={1}  className='flex justify-center '>
                                    <Item style={{ width: "110px", height: "110px" }} className='flex justify-center items-center flex-col'>
                                        <Image className='text-center' src={menuitem.imgurl} width={70} height={70} ></Image>
                                        <Typography variant="caption" gutterBottom className='font-bold'>
                                            {menuitem.title}
                                        </Typography>
                                    </Item>

                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box sx={{ flexGrow: 1 }} padding={3}>
                    <Grid container spacing={2}>
                        {
                            menu.map((menuitem) => (

                                <Grid item xs={6} sm={4} md={3} lg={1}  className='flex justify-center '>
                                    <Item style={{ width: "110px", height: "110px" }} className='flex justify-center items-center flex-col'>
                                        <Image className='text-center' src={menuitem.imgurl} width={70} height={70} ></Image>
                                        <Typography variant="caption" gutterBottom className='font-bold'>
                                            {menuitem.title}
                                        </Typography>
                                    </Item>

                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
        </SwiperSlide>
       
        
      </Swiper>
            </div> */}



        </>
    )
}
