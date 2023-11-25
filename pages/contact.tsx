import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import ContactPage from '../components/ContactForm';


const contact = () => {
  return (
    <div >
   <ContactPage/>
    </div>
  )
}

export default contact