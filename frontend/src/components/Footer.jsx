import { CardFooter } from "react-bootstrap"




const Footer = () => {
  return (
    <CardFooter className="bg-dark text-light text-center py-3">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} Your Website Name</p>
      <p>Address: 123 Main St, City</p>
      <p>Email: info@example.com</p>
    </div>
  </CardFooter>
  )
}

export default Footer