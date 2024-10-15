import React from 'react';
import { Link } from 'react-router-dom';
import "./NoStyle.css";



function NoStylesheet() {
  return (
    <div className=''>
      <div className=''>
        <h2 id=''>Welcome to my Homepage</h2>
        <p id=''>Use the Menu to select different stylesheets</p>
      </div>
      <div className=''>
        <div className=''>
          <ul>
            <Link to="/" className='nostyle'>
              <li>Stylesheet 1</li>
            </Link>
            <Link to="/stylesheet2" className='nostyle'>
              <li>Stylesheet 2</li>
            </Link>
            <Link to="/stylesheet3" className='nostyle'>
              <li>Stylesheet 3</li>
            </Link>
            <Link to="/stylesheet4" className='nostyle'>
              <li>Stylesheet 4</li>
            </Link>
            <Link to="/NoStylesheet" className='nostyle'>
              <li>No Stylesheet</li>
            </Link>
          </ul>
        </div>
        <div className=''>
          <h1 className=''>Same Page Different Stylesheets</h1>
          <p>
            This is a demonstration of how different stylesheets can change the layout of your HTML page. You can change the layout of this page by selecting different stylesheets in the menu, or by selecting one of the following Links: <br />
            <Link to='/stylesheet1'>Stylesheet 1</Link>,  <Link to='/stylesheet2'>Stylesheet 2</Link>,  <Link to='/stylesheet3'>Stylesheet 3</Link>,  <Link to='/stylesheet4'>Stylesheet 4.</Link>
          </p>
          <h2 className=''>No Styles</h2>
          <p>
            This page uses DIV elements to group different sections of the HTML page. Click here to see how the page looks like with no stylesheet: <br />
            <Link to="/NoStylesheet">No Stylesheet</Link>

          </p>
        </div>
        <div className=''>
          <h2 className=''>Side-Bar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
      </div>
      <div className=''>
        <p id=''>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi
        </p>
      </div>
    </div>
  );
}

export default NoStylesheet


