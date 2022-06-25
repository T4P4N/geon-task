import { useState, useEffect } from "react";
import {
  AppProvider,
  IndexTable,
  TextStyle,
  Card,
  useIndexResourceState,
  Page,
  Pagination,
  Spinner

} from "@shopify/polaris";
import React from "react";

export default function App() {
  const resourceName = { singular: "product", plural: "products" };
  const API_BASE = 'https://api.escuelajs.co/api/v1/products'
  const [prevOffset, setPrevOffset] = useState(0)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(null)
  useEffect(() => {
    setLoading(true)
    fetch(`${API_BASE}?offset=${prevOffset}&limit=12`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false)
      })
  }, [prevOffset])

  // const [data, setData] = useState(null)
  // const [productRows, setProductRows] = useState([])
  // const [product, setProduct] = useState(
  // [{
  // "id":1,
  // "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  // "price":109.95,
  // "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  // "category":"men's clothing",
  // "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  // "rating":{"rate":3.9,"count":120}
  // },]
  // )

  const { selectedResources, allResourcesSelected, handleSelectionChange } = useIndexResourceState(products);

  const rowMarkup = products.map(
    ({ id, title, price, description, category}, index) => (
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
          $ {price}
        </IndexTable.Cell>

        <IndexTable.Cell>
          {category.name}
        </IndexTable.Cell>

        <IndexTable.Cell>
          {description}
        </IndexTable.Cell>

      </IndexTable.Row>
    )

  );
  return (
    <AppProvider>
      <Page title="Product List">
        <Card>
          {loading ? <Spinner accessibilityLabel="Loading Products" size="large" /> :
            <IndexTable
              resourceName={resourceName}
              itemCount={products.length}
              selectedItemsCount={
                allResourcesSelected ? "All" : selectedResources.length
              }
              onSelectionChange={handleSelectionChange}
              headings={[
                { title: 'ID' },
                { title: 'Title' },
                { title: 'Price' },
                { title: 'Type' },
                { title: 'Description' },

              ]}
            >
              {rowMarkup}
            </IndexTable>
          }
          <Pagination
            hasPrevious
            onPrevious={() => {
              if (prevOffset >= 12) {
                setPrevOffset(prevOffset - 12)
              } else {
                console.log("Do nothing!")
              }
            }}
            hasNext
            onNext={() => {
              if (prevOffset >= 0) {
                setPrevOffset(prevOffset + 12)
              } else {
                console.log("Do nothing!")
              }
            }} />
        </Card>
      </Page>
    </AppProvider>
  )
}
