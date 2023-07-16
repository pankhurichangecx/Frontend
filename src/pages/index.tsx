//* Importing React from "react". Required to write components in React.
import React from "react";

//* Importing the Home component from "@/components/Home". The '@' alias usually points to the 'src' or 'source' directory in your project structure.
// import Home from "@/components/Home";
import HomePage from "@/components/HomePage";
import Head from "next/head";
//* Declaring the HomePage component as a functional component (React.FC) with TypeScript. React.FC stands for Functional Component, it's a type provided by React for functional components.
const Output: React.FC = () => {
  //* The component returns the Home component as its output.
  return (
  <>
  <Head>
  <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
</Head>

<HomePage />
  </>
  )
};

//* Exporting HomePage as the default export of this module. This allows us to import HomePage using a simpler syntax in other parts of our application.
export default Output;
