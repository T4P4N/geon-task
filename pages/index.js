import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
import React from "react";

export default function Home() {
	const [data, setData] = useState(null)
 	const [isLoading, setLoading] = useState(false)
	const [productRows, setProductRows] = useState([])
	useEffect(() => {
	   setLoading(false)
	   // fetch('https://fakestoreapi.com/products')
	     // .then((res) => res.json())
	     // .then((data) => {
	       // setData(data)
		   // data.map((i)=>productRows.push([i.id, i.title, i.image]))
		   // console.log(productRows)
	       // setLoading(false)
	     // })
	 // }, 
	 },[])

	 const [product, setProduct] = useState(
	 	[{
	 	"id":1,
	 	"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
	 	"price":109.95,
	 	"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
	 	"category":"men's clothing",
	 	"image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
	 	"rating":{"rate":3.9,"count":120}
	 	}]
	 	)
  return (
    <AppProvider>
    	<Page title="Product List">
    		<Card>
    			{isLoading?<div>Loading data...</div>:
    			<ResourceList
    				resourceName={{ singular: "Product", plural: "Products" }}
					items={
					[
					{id:1, 
					"title":"FoldSack", 
					"description":"lorem", 
					"image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
					"category":"Accessories"
					}]}
					renderItem={(item) => {
						const {id, title, image, description, category} = item;
						const media = <Thumbnail source={image} alt={title} size="small"/>;
						return (
							<ResourceItem 
								id={id}
								accessibilityLabel={`View details for ${title}`}
								media={media}
								>
								<div>
				                	<TextStyle variation="strong">{title}</TextStyle>
					            </div>
							</ResourceItem>
						);
					}}/>}  			
    		</Card>
   		</Page>
    </AppProvider>
  )
}
