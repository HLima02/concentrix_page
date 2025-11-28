'use client'
import React from 'react'
import './style.scss'

import SectionTitle from '@/app/components/SectionTitle'
import ArrowBottomBtn from '@/app/components/ArrowBottomBtn'
import StepsCardComponent from '@/app/components/StepsCardComponent'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { stepsContent } from '@/app/lib/constants' 

export default function StepByStep() {
 
  return (
    <section className="step_by_step" id='step_by_step'>
      <div className="content step_by_step_content">

        <SectionTitle 
          title="Comece agora!" 
          subTitle="Veja com é fácil e seguro." 
        />
        

        <div className="steps_cards_section">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="stepsSwiper"
          >
            {stepsContent.map((item) => (
              <SwiperSlide key={item.id}>
                <StepsCardComponent
                  numberLabel={item.numberLabel}
                  title={item.title}
                  text={item.text}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ArrowBottomBtn arrowLink="#asked" />
      </div>
    </section>
  );
}

