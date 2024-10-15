import React from 'react';
import { Link } from 'react-router-dom';
import "./style2.css";



function Stylesheet2() {
  return (
    <div className='container-1'>
      <div className='header'>
        <h1 id='h11'>Welcome to My Homepage</h1>
        <p id='top-2'>Use the Menu to select different Stylesheets</p>
      </div>
      <div className='section'>
        <div className='main-2'>
          <div className='body-2'>
            <h1 id='h1-2'>Same Page Different Stylesheets</h1>
            <p>
              This is a demonstration of how different stylesheets can change the layout of your HTML page. You can change the layout of this page by selecting different stylesheets in the menu, or by selecting one of the following Links: <br />
              <Link to='/'>Stylesheet 1</Link>,  <Link to='/stylesheet2'>Stylesheet 2</Link>,  <Link to='/stylesheet3'>Stylesheet 3</Link>,  <Link to='/stylesheet4'>Stylesheet 4.</Link>
            </p>
          </div>
          <div className='btn2'>
            <Link to="/" className='link1'><button id='btn-1' className='btn-2'>Stylesheet 1</button></Link>
            <Link to="/stylesheet2" className='link1'><button id='btn-2' className='btn-2'>Stylesheet 2</button></Link>
            <Link to="/stylesheet3" className='link1'><button id='btn-3' className='btn-2'>Stylesheet 3</button></Link>
            <Link to="/stylesheet4" className='link1'><button id='btn-4' className='btn-2'>Stylesheet 4</button></Link>
            <Link to="/NoStylesheet" className='link1'><button id='btnNo' className='btn-2'>No Style</button></Link>
          </div>
        </div>
        <div>
          <h2 id='h22'>No Styles</h2>
          <p id='p22'>

            This page uses DIV elements to group different sections of the HTML page. Click here to see how the page looks like with no stylesheet: <br />
            <Link to="/NoStylesheet">No Stylesheet</Link>
          </p>
          <div className='side'>
            <h2>Side-Bar</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
        </div>
      </div>
      <div className='footer-2'>
        <p id='foot'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi
        </p>
      </div>
    </div>
  );
}

export default Stylesheet2;
