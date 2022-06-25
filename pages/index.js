import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from "react";
import {
  AppProvider,
  IndexTable,
  TextStyle,
  Card,
  useIndexResourceState,
  Page,
  ResourceList,
  ResourceItem,
  Thumbnail
  
} from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';
import "@shopify/polaris/build/esm/styles.css";
import App from "./App";
import React from "react";

export default function Home() {
	
  return (
    <AppProvider i18n={en}>
		<App/>    
    </AppProvider>
  )
}
