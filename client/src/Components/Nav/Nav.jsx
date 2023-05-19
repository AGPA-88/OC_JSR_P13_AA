// import React from 'react';
// import './nav.css';

// function Nav({ logoImage, logoAlt, signInLinkText }) {
//   return (
//     <nav className="main-nav">
//       <a className="main-nav-logo" href="./#/index">
//         <img
//           className="main-nav-logo-image"
//           src={logoImage}
//           alt={logoAlt}
//         />
//         <h1 className="sr-only">{logoAlt}</h1>
//       </a>
//       <div>
//         <a className="main-nav-item" href="./#/sign-in">
//           <i className="fa fa-user-circle"></i>
//           {signInLinkText}
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Nav;

import React from 'react';
import './nav.css';

function Nav() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./#/index">
        <img
          className="main-nav-logo-image"
          src="../../img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./#/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
}

export default Nav;