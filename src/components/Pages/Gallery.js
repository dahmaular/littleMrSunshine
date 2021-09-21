import React from 'react';
import './Gallery.css';
import HeroSection from '../HeroSection';
import DataTable from '../Table/Table';
import Paginations from '../Table/Paginations';


export default function Gallery() {
  return (
  <>
  {/* <HeroSection /> */}
  <div className="header-container"></div>
  <Paginations />
  {/* <DataTable /> */}
  </>
    );
}