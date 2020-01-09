import React from 'react';
import { Row } from 'reactstrap';
import {getToken} from "../utils/AxiosWithAuth"
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: .5rem 0;
  margin: .5rem 1rem;
  width: 10rem;
  background: grey;
  color: white;
  border: 2px solid white;
  text-align: center;
  font-size: 1.5rem;
  text-decoration: none;
  :hover{
  background: lightgrey;
  },
`;

function Nav() {

  const signedIn = getToken();

  return (
  <Row>

    {/*<Button href='/' className='button1' styled='text-decoration:none' to="/">Home</Button>*/}

        {!signedIn && <Button href='/register' className="link">Sign Up</Button>}
        {!signedIn && <Button href='/login' className="link">Sign In</Button>}
         {signedIn && <Button href='/account' className="link">Account</Button>}
         {signedIn && <Button href='/logout'  className="link">Logout</Button>}
  </Row>
  )
}
export default Nav;
