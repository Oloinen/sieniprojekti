import React from 'react'
import { Nav } from "react-bootstrap";

const Navigation = () => {
        return (
            <Nav variant="pills" className="justify-content-center" 
        activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Koti</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/mushrooms">Sienet</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/create">Uusi sieni</Nav.Link>
          </Nav.Item>
        </Nav>
        )
    }

export default Navigation;
