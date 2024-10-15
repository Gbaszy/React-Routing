import React from 'react';
import { Link } from 'react-router-dom';
import "./style4.css";



function Stylesheet4() {
  return (
    <>
      <div className='container4'>
        <div className='header4'>
          <h1 id='h24'>Welcome to my Homepage</h1>
          <p id='top4'>Use the Menu to select different stylesheets</p>
        </div>
        <div className='main-4'>
          <div className='btn-4'>
            <ul>
              <Link to="/" className='Link'>
                <li>Stylesheet 1</li>
              </Link>
              <Link to="/stylesheet2" className='Link'>
                <li>Stylesheet 2</li>
              </Link>
              <Link to="/stylesheet3" className='Link'>
                <li>Stylesheet 3</li>
              </Link>
              <Link to="/stylesheet4" className='Link' id='Link4'>
                <li>Stylesheet 4</li>
              </Link>
              <Link to="/NoStylesheet" className='Link'>
                <li>No Stylesheet</li>
              </Link>
            </ul>
          </div>
          <div className='side-4'>
            <h2 className='h24'>Side-Bar</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
        </div>
        <div className='body-4'>
          <h1 className='h24'>Same Page Different Stylesheets</h1>
          <p>
            This is a demonstration of how different stylesheets can change the layout of your HTML page. You can change the layout of this page by selecting different stylesheets in the menu, or by selecting one of the following Links: <br />
            <Link to='/stylesheet1' className='link'>Stylesheet 1</Link>,  <Link to='/stylesheet2' className='link'>Stylesheet 2</Link>,  <Link to='/stylesheet3' className='link'>Stylesheet 3</Link>,  <Link to='/stylesheet4' className='link'>Stylesheet 4.</Link>
          </p>
          <h2 className='h24'>No Styles</h2>
          <p>
            This page uses DIV elements to group different sections of the HTML page. Click here to see how the page looks like with no stylesheet: <br />
            <Link to="/NoStylesheet" className='link'>No Stylesheet</Link>

          </p>
        </div>

        <div className='footer-4'>
          <p id='foot-4'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi
          </p>
        </div>
      </div>
    </>
  );
}

export default Stylesheet4;
