import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
        return (
          <div>
                <Link to="/" className="button">Home</Link>
                <Link to="/mushrooms" className="button">Sienet!</Link>
                <Link to="/create" className="button">Lomake</Link>
                <hr/>
            </div>
        )
    }

export default Navigation;
