# CDAC-Apr26-WebApps
Demos on NodeJs and React

### Assignment practise for Lab exam
1. Create a Product Management software that store products in a Mongodb database. The Application shall be created in React for interacting with the data stored in Mongodb.
2. Each product contains info like ProductName, Cost, ExpiryDate, StockCount, Image(optional).
3. Develop a Express server to publish APIs to store the product details in a Mongodb collection.
4. The Application will be developed on React that reads the products data and add new products into the system. 
5. When the product is added, the application should refresh itself to fetch the new set of data. 
6. Displaying of the products shall be sorted based on the Expiry date. Older products are displayed first. 

#### LATER:
1. Extend the application to update and delete the products also.  


### Software required:
- Windows OS
- Nodejs
- Mongodb
- SampleReactApp download using "npm create vite@latest demo-app"
- ```
  npm create vite@latest demo-app
    Choose React framework and Javascript as compiler
  npm run dev
  ```

#### External libraries for backend:
- npm install express mongoose cors
#### External libraries for front end:
- Axios
- Bootstrap
