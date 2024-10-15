import React from 'react';
import { Link } from 'react-router-dom';
import "./style3.css";



function Stylesheet3() {
  return (
    <div className='container3'>
      <div className='header3'>
        <h2 id='h23'>Welcome to my Homepage</h2>
        <p id='top3'>Use the Menu to select different stylesheets</p>
      </div>
      <div className='main-3'>
        <div className='btn-3'>
          <Link to="/" className='link1'><button id='btn3' className='btn3'>Stylesheet 1</button></Link>
          <Link to="/stylesheet2" className='link1'><button id='btn2' className='btn3'>Stylesheet 2</button></Link>
          <Link to="/stylesheet3" className='link1'><button id='btn13' className='btn3'>Stylesheet 3</button></Link>
          <Link to="/stylesheet4" className='link1'><button id='btn4' className='btn3'>Stylesheet 4</button></Link>
          <Link to="/NoStylesheet" className='link1'><button id='btnNo' className='btn3'>No Style</button></Link>
        </div>
        <div className='body-3'>
          <h1 className='h23'>Same Page Different Stylesheets</h1>
          <p>
            This is a demonstration of how different stylesheets can change the layout of your HTML page. You can change the layout of this page by selecting different stylesheets in the menu, or by selecting one of the following Links: <br />
            <Link to='/stylesheet1'>Stylesheet 1</Link>,  <Link to='/stylesheet2'>Stylesheet 2</Link>,  <Link to='/stylesheet3'>Stylesheet 3</Link>,  <Link to='/stylesheet4'>Stylesheet 4.</Link>
          </p>
          <h2 className='h23'>No Styles</h2>
          <p>
            This page uses DIV elements to group different sections of the HTML page. Click here to see how the page looks like with no stylesheet: <br />
            <Link to="/NoStylesheet">No Stylesheet</Link>

          </p>
        </div>
        <div className='side-3'>
          <h2 className='h23'>Side-Bar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
      </div>
      <div className='footer-3'>
        <p id='foot-3'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi
        </p>
      </div>
    </div>
  );
}

export default Stylesheet3;
