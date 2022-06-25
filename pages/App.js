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
import React from "react";

export default function App() {
	const [data, setData] = useState(null)
 	const resourceName = {singular:"product", plural:"products"};
	const [productRows, setProductRows] = useState([])

	 const [product, setProduct] = useState(
	 	[{
	 	"id":1,
	 	"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
	 	"price":109.95,
	 	"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
	 	"category":"men's clothing",
	 	"image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
	 	"rating":{"rate":3.9,"count":120}
	 	},]
	 	)
	const { selectedResources, allResourcesSelected, handleSelectionChange } = useIndexResourceState(product);
	 
	 	const rowMarkup = product.map(
	 	({id, title, price, description, cateory, image}, index)=>(
	 		<IndexTable.Row
				id={id}
				key={id}
				postition={index}
				selected={selectedResources.includes(id)}
	 		>
	 			<IndexTable.Cell>
	 				{id}
	 			</IndexTable.Cell>
			
	 			<IndexTable.Cell>
	 				<TextStyle variation="strong">{title}</TextStyle>
	 			</IndexTable.Cell>
			
	 			<IndexTable.Cell>
	 				{price}
	 			</IndexTable.Cell>
			
	 			<IndexTable.Cell>
	 				{description}
	 			</IndexTable.Cell>
			
	 		</IndexTable.Row>
	 	)

	 	);
  return (
    <AppProvider>
    		<Card title="Product List">
					<IndexTable
						resourceName={resourceName}
						itemCount={product.length}
						selectedItemsCount = {
							allResourcesSelected ? "All" : selectedResources.length
						}
						onSelectionChange={handleSelectionChange}
						headings={[
						{title:'id'},
						{title:'title'},
						{title:'price'},
						{title:'description'},
							
						]}
					>
						{rowMarkup}
					</IndexTable>
    		</Card>
    </AppProvider>
  )
}
