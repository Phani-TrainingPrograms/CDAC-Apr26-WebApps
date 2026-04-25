# React Training program

## What is React?
React is Javascript library developed by Facebook to build dynamic and interactive user interfaces.  It is widely adopted in modren web applications due its Component architecture and efficient rendering using Virtual-DOM. 

React focuses only on the View part of the Application stack. With this, it can be integrated with other libraries for routing, state Management and backend communications. 

### What is Virtual-DOM?
React uses a VIRTUAL-DOM which is a light-weight copy of the real DOM. DOM is a TREE_VIEW structure of the HTML Document that is outlayed in the Browser. This is called as Physical/Real DOM.
The virtual DOM is a in-memory object that is created when U open your react application. The changes, values that U need to set on the Physical DOMWindow shall be created and placed in this virtual DOM.
During Rendering process, when the page is loaded into the browser, the values, structure shall be copied into the physical DOM and viewed by the user.
For future interactions, the React performs diffing process, it determines what has changed and applies minimal updates to the UI making it more performance oriented. 
Pages get re-rendered only when there is a change in the state, structure of the DOM. UI looks like fast and minimalistic changes are applied.

### How to create react applications?
#### Prerequisites
1. Nodejs : Runs the JS outside the browser
2. npm : Intalling the packages. If nodejs is installed, npm will be available. 
3. Visual Studio Code: Code Editor. Alternatively, U can use Sublime text, IntelliJ

#### Steps:
1. Verify if node is installed: node --version. Should be 20+
2. Create a React application using react-react-app or vite. name of your project shall be in smaller case.  
```
npm create vite@latest ur-appname
```
3. Select React as framework and JS as language 
4. Application shall be created and displayed in the browser. 


#### Understanding the code
1. The React applications are single page applications(SPA). There will be only one HTML page called Index.html. 
2. All the source files will be available in the src folder. 
    - main.jsx is the entry point of your application. 
    - Connects React to the Browser DOM using createRoot that references the element in the physical DOM. 
    - The root element will be the place where all React components shall be placed. 
3. It uses JSX format. JS + XML. 
4. render method loads UR React Component into the container.(Root)
5. StrictMode handles any potential issues, warning on any unsafe life cycle managements and encourages best practices. This is required for Development tool purpose. 

#### Flow chart:
Browser -> index.html -> main.jsx runs -> React finds root -> Renders App inside it. ->UI appears on browser.

#### App.jsx
1. All files in React are saved with .jsx extension. Its JS + XML
2. When UR component returns an XML Content, react will modify the output as React.createElement("h1", what to set there, "location")
3. There will be only one root element for every Componment. 
4. A Component is a Javascript class/function that renders a DOM Structure in the form of XML with some data in it. 
5. Typically, a component can have XML, functions, CSS and Unit tests supporting it. 
6. Any static content like images that are used across the application are placed in public folder.
7. The App component will have other components as child components within it.  

### Components
1. Components are fundamental unit of any React application. 
2. React being a Component based architecture, every part of the application is designd to be rendered as independent units. 
3. Every React component is a reusable piece of UI that returns a JSX. (What should appear on the screen). 
4. There are 2 kinds of Components in react ->functional Components and statefull components. 
5. statefull components are obselete. They are typically classes which have state(Data) in them, like objects where it has data members, state is an implicit data of the statefull components, now not recommended for Modern react apps.  
6. Functional components are the recommended way of creating components. 
    - They a simple JS functions. 
    - Easy to write and understand.
    - Supports a concept called Hooks(state, lifecycle, data). 
    - Prefered in modern react apps.
7. React provides fragments to allow components to be placed inside them. works similar to div, but light weight. It does not have any name to it. 

### Props
- React uses nested component structure. The parent component has some data that could be propogated to the child components that it contains.
- For this, react provides Props or Properties. 
- More like a function receiving arguments. Caller of the function shall pass data to the function.
- Component receives the values and populates/computes it to its UI. 
- Props are one-way and read only, it will come from Parent to child. Anything from child should be done thru events, not props. 
- Sometimes leads to unnessasary data being sent to the child elements even though few of them might not use it. This is called as Props Drilling.   

### Handling DOM Events. 
- React allows DOM Events to be handled using its own event handling feature.
- As every React element is not HTML Element, all Html events are mapped to custom events of React components. 
- Every event of React element will have prefix on followed by the event name. 
