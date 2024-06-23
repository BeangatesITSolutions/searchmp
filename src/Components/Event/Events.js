import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import Typography from "@mui/material/Typography";
import SwiperCore, { EffectCube, Autoplay } from 'swiper';
import { IonIcon } from '@mui/icons-material';
// import 'swiper/swiper-bundle.min.css';
// import { loadParticles } from 'tsparticles';
SwiperCore.use([EffectCube, Autoplay]);

const ParticleBackground = () => {
  useEffect(() => {
    loadParticles('tsparticles', {
      fpsLimit: 60,
      backgroundMode: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: [
            "#3998D0",
            "#2EB6AF",
            "#A9BD33",
            "#FEC73B",
            "#F89930",
            "#F45623",
            "#D62E32",
          ],
        },
        destroy: {
          mode: "split",
          split: {
            count: 1,
            factor: {
              value: 5,
              random: {
                enable: true,
                minimumValue: 4,
              },
            },
            rate: {
              value: 10,
              random: {
                enable: true,
                minimumValue: 5,
              },
            },
            particles: {
              collisions: {
                enable: false,
              },
              destroy: {
                mode: "none",
              },
              life: {
                count: 1,
                duration: {
                  value: 1,
                },
              },
            },
          },
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            sides: 5,
          },
        },
        opacity: {
          value: 1,
          random: false,
          animation: {
            enable: false,
            speed: 1,
            minimumValue: 0.1,
            sync: false,
          },
        },
        size: {
          value: 8,
          random: {
            enable: true,
            minimumValue: 4,
          },
          animation: {
            enable: false,
            speed: 40,
            minimumValue: 0.1,
            sync: false,
          },
        },
        collisions: {
          enable: true,
          mode: "destroy",
        },
        move: {
          enable: true,
          speed: 7,
          direction: "none",
          random: false,
          straight: false,
          outMode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      detectRetina: true,
    });
  }, []);

  return <Box id="tsparticles" sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />;
};
export default function Events() {
  return (
<>
 <section>
    <Typography variant='h5' align='center'sx={{
        color:"red",
     
        // fontFamily: "revert-layer",
        textAlign: "center",
        marginTop: "2%",
        fontWeight: "bold",
        cursor:"pointer"
    }} >
    FESTIVALS AND EVENTS IN MADHYA PRADESH 
    </Typography>
    <Box sx={{
        height:"80vh",
        border:"2px solid red"
    }}>
     
     <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', fontFamily: "'Nunito', sans-serif" }}>
      <ParticleBackground />
      <Box component="section" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '50% 45%' }, placeItems: 'center', gap: { xs: '64px', md: '60px' }, padding: { xs: '40px 40px 60px', md: '20px 60px' }, minHeight: '100vh' }}>
        <Box className="content" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Box component="h1" sx={{ fontFamily: "'Comfortaa', sans-serif", fontSize: { xs: '2rem', md: '3.5rem' }, fontWeight: 700, lineHeight: 1.2, letterSpacing: 1, mb: 3, color: '#fff' }}>
            Let's Travel The World Together!
          </Box>
          <Box component="p" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, fontWeight: 300, lineHeight: 1.5, mb: 3, color: '#fff' }}>
            Our tours are designed to transport you to the heart of the world's most captivating destinations, creating memories that will last a lifetime. You can uncover the hidden gems, iconic landmarks, and unique cultural treasures that make each destination special.
          </Box>
          <Box component="button" sx={{ background: '#eaeaea', color: '#202134', fontSize: { xs: '0.9rem', md: '1rem' }, fontWeight: 600, border: 0, outline: 0, padding: '8px 14px', borderRadius: '7px', transform: 'scale(1)', transition: 'all 0.4s ease-in', cursor: 'pointer', '&:hover, &:focus': { transform: 'scale(0.98)', backgroundColor: '#6f7aa6', color: '#eaeaea' } }}>
            Explore Tours
          </Box>
        </Box>

        <Box className="swiper" sx={{ position: 'relative', width: { xs: '300px', sm: '350px', md: '400px' }, height: { xs: '400px', sm: '450px', md: '490px' } }}>
          <Swiper
            effect="cube"
            grabCursor={true}
            loop={true}
            speed={1000}
            cubeEffect={{
              shadow: false,
              slideShadows: true,
              shadowOffset: 10,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 2600,
              pauseOnMouseEnter: true,
            }}
          >
            <SwiperSlide>
              <Box sx={{ position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover', border: '1px solid rgba(255, 255, 255, 0.3)', userSelect: 'none', borderRadius: '20px' }}>
                <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/49db1b5f-09f6-4433-be57-51687585600c" alt="Walking Tour in Florence" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                <Box sx={{ position: 'absolute', top: '8px', right: '6px', background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(6px)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)', borderRadius: '30px', padding: '6px 10px', color: '#fff', fontSize: { xs: '0.8rem', md: '0.9rem' }, fontWeight: 600 }}>
                  from $230 per group
                </Box>
                <Box className="overlay" sx={{ position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', left: 0, bottom: 0, width: '100%', height: '150px', padding: '10px 20px', background: 'rgba(93, 95, 145, 0.2)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255, 255, 255, 0.3)', color: '#fff', borderRadius: '0 0 20px 20px' }}>
                  <Box component="h1" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: 600 }}>
                    Walking Tour in Florence
                  </Box>
                  <Box component="p" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' }, fontWeight: 300, lineHeight: 1.3 }}>
                    Discover the fascinating beauty of this historic city by strolling through the rich cultural tapestry that makes Florence a timeless destination.
                  </Box>
                  <Box className="ratings" sx={{ display: 'flex', columnGap: '10px', marginTop: '-6px' }}>
                    <Box className="stars">
                      <IonIcon className="star" name="star" sx={{ color: '#afe312' }} />
                      <IonIcon className="star" name="star" sx={{ color: '#afe312' }} />
                      <IonIcon className="star" name="star" sx={{ color: '#afe312' }} />
                      <IonIcon className="star" name="star" sx={{ color: '#afe312' }} />
                      <IonIcon className="star" name="star-half-outline" sx={{ color: '#afe312' }} />
                    </Box>
                    <Box component="span" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' }, fontWeight: 300 }}>138 reviews</Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            {/* Additional SwiperSlides can be added here similarly */}
          </Swiper>
        </Box>
      </Box>
    </Box>
    </Box>
 </section>
</>
  )
}

